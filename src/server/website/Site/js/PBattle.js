var PBattleApi = new class {
    constructor() {
        this.rcjs = new RcJsApi(JSON.parse(XMLsync("Gigly.json").responseText)["Server"] + "server/");
    }
    ResearchServer(search) {
        return this.rcjs.getJsBySystem(
            "ResearchServer", {
                "Search": search,
            }
        );
    }
    CreateServer(ServerName, userToken, Atoken, url) {
        return this.rcjs.getJsBySystem(
            "CreateServer", {
                "ServerName": ServerName,
                "userToken": userToken,
                "Atoken": Atoken,
                "url": url
            }
        );
    }
    GetServerByToken(searchToken, userToken, Atoken) {
        return this.rcjs.getJsBySystem(
            "GetServerByToken", {
                "tokenSearch": searchToken,
                "userToken": userToken,
                "Atoken": Atoken
            }
        );
    }
    GetServerInfo(ServerToken, userToken, Atoken) {
        return this.rcjs.getJsBySystem(
            "GetServerInfo", {
                "ServerToken": ServerToken,
                "userToken": userToken,
                "Atoken": Atoken
            }
        );
    }
    SendServerInfo(ServerToken, userToken, Atoken, newInfo) {
        return this.rcjs.getJsBySystem(
            "SendServerInfo", {
                "ServerToken": ServerToken,
                "userToken": userToken,
                "Atoken": Atoken,
                "newInfo": JSON.stringify(newInfo)
            }
        );
    }
}();