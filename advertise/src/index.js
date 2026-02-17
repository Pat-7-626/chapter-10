const express = require("express");

const PORT = process.env.PORT || 3005;

async function main() {

    const app = express();

    app.use(express.json());

    //
    // Advertise API
    //
    app.get("/ads", (req, res) => {
        res.json([
            {
                name: "Shopee",
                image: "https://icassava.eng.ku.ac.th/wiki/images/5/58/Shopee.png",
                url: "https://shopee.co.th"
            },
            {
                name: "Lazada",
                image: "https://freelogopng.com/images/all_img/1685525042lazada-app-logo.png",
                url: "https://lazada.co.th"
            },
            {
                name: "Kaidee",
                image: "https://play-lh.googleusercontent.com/zqNEWiGA_SogqqQHNW0R2w3s5BcvHxc80GjZ_qbMIY3elmKw6WMUzAzmbjwQFUzq__s",
                url: "https://www.kaidee.com"
            }
        ]);
    });

    app.listen(PORT, () => {
        console.log(`Advertise microservice running on port ${PORT}`);
    });
}

main().catch(err => {
    console.error("Advertise service failed.");
    console.error(err && err.stack || err);
});
