import superagent from "superagent";

export function api(url) {
    superagent.get(url)
        .end((error, response) => {
            if (response) {
                
                if (response.status === 200) {
                    console.log("RESPNSE", response.body)
                    return response.body;
                }
            }

            return [];
        })
}