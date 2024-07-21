function solution(genres, plays) {
const myMap = genres.reduce((acc, genre, index) => {
    const playCount = plays[index];
    const genreInfo = acc.get(genre) || { totalPlays: 0, topSongs: [] };

    // 장르별 재생 횟수 업데이트
    genreInfo.totalPlays += playCount;

    // 노래 목록에 현재 노래 추가 및 정렬 후 상위 2개만 남기기
    genreInfo.topSongs = [...genreInfo.topSongs, { playCount, index }]
        .sort((a, b) => b.playCount - a.playCount)
        .slice(0, 2);

    // 업데이트된 장르 정보 저장
    acc.set(genre, genreInfo);

    return acc;
}, new Map());
    
// myMap을 배열로 변환하고 필요한 작업을 수행
const result = [...myMap.entries()]
    .sort((a, b) => b[1].totalPlays - a[1].totalPlays)
    .flatMap(item => item[1].topSongs)
    .map(song => song.index);

return result;
}