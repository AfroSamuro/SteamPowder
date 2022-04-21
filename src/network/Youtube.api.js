export default class YoutubeAPI {
    static key = 'AIzaSyCpiWGtPRW-8YSc1Qji_vF0CAoif5rOxms';

    static async getYoutubeVideos(name) {
        const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${name}+review&type=video&key=AIzaSyCpiWGtPRW-8YSc1Qji_vF0CAoif5rOxms`);
        return await resp.json()
    }
}