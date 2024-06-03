export function decodeSpecialCharacters(encodedLink: string) {
    let decodedLink = encodedLink
        .replace(/\\u0025/g, "%")
        .replace(/\\u0026/g, "&")
        .replace(/\\u002F/g, "/")
        .replace(/\\u003A/g, ":")
        .replace(/\\u003F/g, "?")
        .replace(/\\u0023/g, "#")
        .replace(/\\u0024/g, "$")
        .replace(/\\u002B/g, "+")
        .replace(/\\u002C/g, ",")
        .replace(/\\u0020/g, " ")
        .replace(/\\u005F/g, "_")
        .replace(/\\u002E/g, ".")
        .replace(/\\u003D/g, "=")
        .replace(/\\u0025/g, "%")
        .replace(/\\u007B/g, "{")
        .replace(/\\u007D/g, "}")
        .replace(/\\u003C/g, "<")
        .replace(/\\u003E/g, ">")
        .replace(/\\u005B/g, "[")
        .replace(/\\u005D/g, "]")
        .replace(/\\u0022/g, '"')
        .replace(/\\u005C/g, "\\")
        .replace(/\\u005E/g, "^")
        .replace(/\\u0026/g, "&")
        .replace(/\\u003B/g, ";")
        .replace(/\\u007C/g, "|")
        .replace(/\\u0060/g, "`")
        .replace(/\\u0027/g, "'")
        .replace(/\\u002D/g, "-")
        .replace(/\\u0021/g, "!")
        .replace(/\\u0040/g, "@")
        .replace(/\\u002A/g, "*")
        .replace(/\\u0028/g, "(")
        .replace(/\\u0029/g, ")")
        .replace(/\\u003A/g, ":")
        .replace(/\\u002F/g, "/")
        .replace(/\\u003F/g, "?")
        .replace(/\\u0023/g, "#")
        .replace(/\\u0024/g, "$")
        .replace(/\\u002B/g, "+")
        .replace(/\\u002C/g, ",")
        .replace(/\\u0020/g, " ")
        .replace(/\\u005F/g, "_")
        .replace(/\\u002E/g, ".")
        .replace(/\\u003D/g, "=")
        .replace(/\\u0025/g, "%")
        .replace(/\\u007B/g, "{")
        .replace(/\\u007D/g, "}")
        .replace(/\\u003C/g, "<")
        .replace(/\\u003E/g, ">")
        .replace(/\\u005B/g, "[")
        .replace(/\\u005D/g, "]")
        .replace(/\\u0022/g, '"')
        .replace(/\\u005C/g, "\\")
        .replace(/\\u005E/g, "^")
        .replace(/\\u0026/g, "&")
        .replace(/\\u003B/g, ";")
        .replace(/\\u007C/g, "|")
        .replace(/\\u0060/g, "`")
        .replace(/\\u0027/g, "'")
        .replace(/\\u002D/g, "-")
        .replace(/\\u0021/g, "!")
        .replace(/\\u0040/g, "@")
        .replace(/\\u002A/g, "*")
        .replace(/\\u0028/g, "(")
        .replace(/\\u0029/g, ")");
    return decodedLink;
}

export function getVideoSourceURLsFromRaw(htmlRaw: string) {
    let browser_native_hd_url;
    let browser_native_sd_url;

    // GET HD QUALITY
    try {
        browser_native_hd_url =
            decodeSpecialCharacters(htmlRaw.split('"browser_native_hd_url":"')[1].split('"')[0]).replace(/\\/g, "") +
            "&dl=1";
    } catch (error) {}

    // GET SD QUALITY
    try {
        browser_native_sd_url =
            decodeSpecialCharacters(htmlRaw.split('"browser_native_sd_url":"')[1].split('"')[0]).replace(/\\/g, "") +
            "&dl=1";
    } catch (e) {}

    return {
        browser_native_hd_url,
        browser_native_sd_url,
    };
}

export async function getVideoSourceURLsFromLink(facebookVideoUrl: string) {
    return fetch(facebookVideoUrl, {
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "vi",
            "cache-control": "max-age=0",
            dpr: "2",
            priority: "u=0, i",
            "sec-ch-prefers-color-scheme": "light",
            "sec-ch-ua": '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            "sec-ch-ua-full-version-list":
                '"Chromium";v="124.0.6367.92", "Google Chrome";v="124.0.6367.92", "Not-A.Brand";v="99.0.0.0"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": '""',
            "sec-ch-ua-platform": '"macOS"',
            "sec-ch-ua-platform-version": '"14.4.1"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "viewport-width": "674",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
    })
        .then((response) => response.text())
        .then((res) => {
            let minifyContent = res;

            try {
                minifyContent = res.split("is_rss_podcast_video")[1].split("sequence_number")[0];
            } catch (error) {
                console.log("Error, can not get minimal content!" + error);
            }

            return res.includes("www.facebook.com/login") && !res.includes("browser_native_sd_url")
                ? { isPrivate: true }
                : getVideoSourceURLsFromRaw(minifyContent);
        })
        .catch((err) => {
            console.log("ERROR, can not crawl video data: " + err);
            return { error: "Can not crawl video data!" };
        });
}
