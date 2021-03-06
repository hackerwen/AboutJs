function songManager() {
    this.songList = null;
}

songManager.prototype = {
    constructor: songManager,

    init: function(arr) {
        this.songList = arr;
    },

    addSong: function(obj) {
        this.songList.push(obj);
    },

    selectSong: function(songName) {
        for (var i = 0; i < this.songList.length; i++) {
            if (this.songList[i].name == songName) {
                return this.songList[i];
            }
            if (i == this.songList.length - 1) {
                throw "库中无此歌曲";
            }
        }
    },

    removeSong: function(songName) {
        var song = this.selectSong(songName);
        var index = this.songList.indexOf(song);
        this.songList.splice(index, 1);
    },

    editSong: function(songName, author) {
        var song = this.selectSong(songName);
        song.author = author;
    }
}

var myManager = new songManager();

myManager.init([{
    name: 'Summer',
    author: '久石让'
}, {
    name: '萤火虫之舞',
    author: '石进'
}]);

myManager.addSong({
    name: '青藏高原',
    author: '韩红'
});

myManager.removeSong('Summer');

myManager.editSong('青藏高原', "赵志文");

console.log(myManager.songList);

var otherMg = new songManager();

otherMg.init([{
    name: '钟无艳',
    author: '谢安琪'
}, {
    name: '罗生门',
    author: '谢安琪'
}]);

otherMg.editSong('罗生门', '赵志文');

console.log(otherMg.songList);

otherMg.removeSong('两只老虎');