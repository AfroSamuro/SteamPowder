export default class SteamAPI {
    static key = 'BEB1D9ACDB5AE053EEDD4C4DA713706E'
    static url = `http://localhost:5000/`;


    static async fetchFromSteam(url) {
        const req = await fetch(`http://localhost:5000/`, {
            headers: {
                ['steam-url-request']: url,
            }
        })
        return await req.json();
    }

    static async getNewsAppById(id) {
        return await this.fetchFromSteam(
            `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${id}&count=3&maxlength=300&format=json`
        )
    }

    static async getSteamAPPs() {
        return await this.fetchFromSteam(
            'https://steamspy.com/api.php?request=top100in2weeks'
        )
    }

    static async getGameDetails(id) {
        return await this.fetchFromSteam(
            `https://store.steampowered.com/api/appdetails?appids=${id}`
        )
    }
    static async getCurrentOnline(id) {
        return await this.fetchFromSteam(
            `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${id}`
        )
    }

    static async getTopGames() {
        const res = await fetch('http://localhost:5000/stats');
        return await res.json()
    }

}