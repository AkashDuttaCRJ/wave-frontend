import React, { useState } from 'react'
import BottomPlayer from '../BottomPlayer'
import NowPlayingPlaylist from '../NowPlayingPlaylist'
import TopPlayer from '../TopPlayer'
import './MusicPlayer.css'

const MusicPlayer = () => {
  const tracks = [
    {
      "320kbps": "true",
      "album": "Manike Mage Hithe",
      "album_url": "https://www.jiosaavn.com/album/manike-mage-hithe/y6Q5PgQkCg8_",
      "albumid": "27733209",
      "artistMap": {
      "Chamath Sangeeth": "8649429",
      "Satheeshan": "668840",
      "Yohani": "1618262"
      },
      "copyright_text": "℗ 2021 Aryans Music",
      "duration": "162",
      "encrypted_media_path": "NMKyboFo/FhQzeO5lpnJfRaU3NiEr0sFQsGx8S9GHPcx+RwNk04+tojmsyWJ8pVd",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyuRnG/nuaf7s5jq6R1OvdzJ6ovJh/SVzmkwy2FChtEDA5s3Ixt0+Qshw7tS9a8Gtq",
      "explicit_content": 0,
      "featured_artists": "",
      "featured_artists_id": "",
      "has_lyrics": "false",
      "id": "UR26AJHT",
      "image": "https://c.saavncdn.com/636/Manike-Mage-Hithe-Sinhalese-2021-20210609004048-500x500.jpg",
      "is_dolby_content": false,
      "label": "Aryans Music",
      "label_url": "/label/aryans-music-albums/lxkgVuRI-00_",
      "language": "sinhalese",
      "lyrics_snippet": "",
      "media_preview_url": "https://preview.saavncdn.com/636/ff7886673edfb5e4e8f8b812685af382_96_p.mp4",
      "media_url": "https://aac.saavncdn.com/636/ff7886673edfb5e4e8f8b812685af382_320.mp4",
      "music": "",
      "music_id": "",
      "origin": "album",
      "perma_url": "https://www.jiosaavn.com/song/manike-mage-hithe/JTpZBzV6f2c",
      "play_count": "4869920",
      "primary_artists": "Chamath Sangeeth, Yohani, Satheeshan",
      "primary_artists_id": "8649429, 1618262, 668840",
      "release_date": "2021-05-31",
      "rights": {
      "cacheable": true,
      "code": 0,
      "delete_cached_object": false,
      "reason": ""
      },
      "singers": "",
      "song": "Manike Mage Hithe",
      "starred": "false",
      "starring": "",
      "triller_available": false,
      "type": "",
      "vcode": "010911261419158",
      "vlink": "https://jiotunepreview.jio.com/content/Converted/010911261374891.mp3",
      "year": "2021"
      },{
        "320kbps": "true",
        "album": "BIBA",
        "album_url": "https://www.jiosaavn.com/album/biba/98G3uzIs2qQ_",
        "albumid": "14990426",
        "artistMap": {
        "Dev Negi": "653204",
        "Marshmello": "862454",
        "Pardeep Singh Sran": "2378899",
        "Pritam": "456323",
        "Shirley Setia": "880428"
        },
        "copyright_text": "© 2019 Joytime Collective",
        "duration": "175",
        "encrypted_media_path": "NMKyboFo/Fhk9GyY2+LAsyr/9Ttt8Gro8+St1lAAGZrUZ3pw7/nAjilbZNH+1wO6",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyNWCbjCNtKmlpOHj5Z9iMHUI6D1DOptP5iGTj6aGadVaA6rUzPXhg/xw7tS9a8Gtq",
        "explicit_content": 0,
        "featured_artists": "",
        "featured_artists_id": "",
        "has_lyrics": "false",
        "id": "PIzj75J8",
        "image": "https://c.saavncdn.com/987/BIBA-Unknown-2019-20200813225958-500x500.jpg",
        "is_dolby_content": false,
        "label": "Joytime Collective",
        "label_url": "/label/joytime-collective-albums/ps0qVbBvFRE_",
        "language": "hindi",
        "lyrics_snippet": "",
        "media_preview_url": "https://preview.saavncdn.com/987/03f9cd50555cbf24f251b195afaceb92_96_p.mp4",
        "media_url": "https://aac.saavncdn.com/987/03f9cd50555cbf24f251b195afaceb92_320.mp4",
        "music": "",
        "music_id": "",
        "origin": "album",
        "perma_url": "https://www.jiosaavn.com/song/biba/ICERW0MFfQs",
        "play_count": "57581620",
        "primary_artists": "Marshmello, Pritam, Shirley Setia, Pardeep Singh Sran, Dev Negi",
        "primary_artists_id": "862454, 456323, 880428, 2378899, 653204",
        "release_date": "2019-02-01",
        "rights": {
        "cacheable": true,
        "code": 0,
        "delete_cached_object": false,
        "reason": ""
        },
        "singers": "Marshmello, Pritam, Shirley Setia, Pardeep Singh Sran, Dev Negi",
        "song": "BIBA",
        "starred": "false",
        "starring": "",
        "triller_available": false,
        "type": "",
        "year": "2019"
        },
        {
          "320kbps": "true",
          "album": "Wolves",
          "album_url": "https://www.jiosaavn.com/album/wolves/8MDTQ3s3A7s_",
          "albumid": "11686511",
          "artistMap": {
          "Alexandra Tamposi": "569102",
          "Andrew Wotman": "1256966",
          "Brian D. Lee": "1257096",
          "Carl Rosen": "2224689",
          "Louis Bell": "1256967",
          "Marshmello": "862454",
          "Selena Gomez": "603812"
          },
          "copyright_text": "℗ 2017 Interscope Records",
          "duration": "198",
          "encrypted_media_path": "NMKyboFo/FgRnqn6umdA0n+dO8/hUHXRCOXmdfVDIXjI9y5FPCUDS19Np/xSGKft",
          "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDylGSr97iA3d7/tCuvCkcJoBcC4opFxpPM9sB7VWn1/FVIPf0Bjv8tEhw7tS9a8Gtq",
          "explicit_content": 0,
          "featured_artists": "",
          "featured_artists_id": "",
          "has_lyrics": "false",
          "id": "2oWa2CKB",
          "image": "https://c.saavncdn.com/404/Wolves-English-2017-20171025165934-500x500.jpg",
          "is_dolby_content": false,
          "label": "Selena Gomez PS",
          "label_url": "/label/selena-gomez-ps-albums/1dhW8vzBWCs_",
          "language": "english",
          "lyrics_snippet": "",
          "media_preview_url": "https://preview.saavncdn.com/404/244795898c441ae61ca596d0a7bdb568_96_p.mp4",
          "media_url": "https://aac.saavncdn.com/404/244795898c441ae61ca596d0a7bdb568_320.mp4",
          "music": "Marshmello, Selena Gomez, Andrew Wotman, Alexandra Tamposi, Brian D. Lee, Louis Bell, Carl Rosen",
          "music_id": "862454, 603812, 1256966, 569102, 1257096, 1256967, 2224689",
          "origin": "album",
          "perma_url": "https://www.jiosaavn.com/song/wolves/Qgc8UEZzfHE",
          "play_count": "31892968",
          "primary_artists": "Selena Gomez, Marshmello",
          "primary_artists_id": "603812, 862454",
          "release_date": "2017-10-25",
          "rights": {
          "cacheable": true,
          "code": 0,
          "delete_cached_object": false,
          "reason": ""
          },
          "singers": "Selena Gomez, Marshmello",
          "song": "Wolves",
          "starred": "false",
          "starring": "",
          "triller_available": false,
          "type": "",
          "vcode": "010912291154903",
          "vlink": "https://jiotunepreview.jio.com/content/Converted/010912291111359.mp3",
          "year": "2017"
          },
          {
            "320kbps": "true",
            "album": "Alone",
            "album_url": "https://www.jiosaavn.com/album/alone/RGziQ8ScK3g_",
            "albumid": "10149322",
            "artistMap": {
            "Alan Walker": "1335467",
            "Anders Frøen": "1425075",
            "Gunnar Greve": "1625408",
            "Jesper Borgen": "822579",
            "Jonnali Parmenius": "648765"
            },
            "copyright_text": "(P) 2016 MER Musikk under exclusive license to Sony Music Entertainment Sweden AB",
            "duration": "159",
            "encrypted_media_path": "NMKyboFo/FiPN1G8VqTU+7Sf9FyhtFKRWQFs31xLBf9N/ObX9gfSvSKl9fmqfTSn",
            "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyULhUDjtGxO3YksNsJrsZM9WpwxlX8VaxALdGI/gFaTd13Eg3fyS2ERw7tS9a8Gtq",
            "explicit_content": 0,
            "featured_artists": "",
            "featured_artists_id": "",
            "has_lyrics": "false",
            "id": "mlOelmXY",
            "image": "https://c.saavncdn.com/522/Alone-English-2017-20180131085202-500x500.jpg",
            "is_dolby_content": false,
            "label": "MER Recordings",
            "label_url": "/label/mer-recordings-albums/qsZ9rf6CKZI_",
            "language": "english",
            "lyrics_snippet": "",
            "media_preview_url": "https://preview.saavncdn.com/522/cc62bd3e274e8d8b1a54c27c70ada512_96_p.mp4",
            "media_url": "https://aac.saavncdn.com/522/cc62bd3e274e8d8b1a54c27c70ada512_320.mp4",
            "music": "Alan Walker, Jesper Borgen, Anders FrÃ¸en, Gunnar Greve, Jonnali Parmenius",
            "music_id": "1335467, 822579, 1425075, 1625408, 648765",
            "origin": "album",
            "perma_url": "https://www.jiosaavn.com/song/alone/HQQkVBhdb2o",
            "play_count": "48639646",
            "primary_artists": "Alan Walker",
            "primary_artists_id": "1335467",
            "release_date": "2016-12-02",
            "rights": {
            "cacheable": true,
            "code": 0,
            "delete_cached_object": false,
            "reason": ""
            },
            "singers": "Alan Walker",
            "song": "Alone",
            "starred": "false",
            "starring": "",
            "triller_available": false,
            "type": "",
            "vcode": "010910140480882",
            "vlink": "https://jiotunepreview.jio.com/content/Converted/010910140447754.mp3",
            "year": "2016"
            },
            {
              "320kbps": "true",
              "album": "Alone, Pt. II",
              "album_url": "https://www.jiosaavn.com/album/alone-pt.-ii/ZCqviQsE5dI_",
              "albumid": "18273908",
              "artistMap": {
              "Alan Walker": "1335467",
              "Alan Walker &amp; Ava Max": "7374795",
              "Alexander Standal Pavelich": "5936693",
              "Amanda Ava Koci": "6003540",
              "Ava Max": "3685366",
              "Carl Hovind": "659013",
              "Dag Holtan-Hartwig": "820451",
              "Erik Smaaland": "772800",
              "Fredrik Borch Olsen": "1584282",
              "Gunnar Greve": "1625408",
              "Halvor Folstad": "820452",
              "Marcus Arnbekk": "3333917",
              "Moa Pettersson Hammar": "6092767",
              "Øyvind Sauvik": "1584281"
              },
              "copyright_text": "(P) 2019 MER under exclusive license to Sony Music Entertainment Sweden AB",
              "duration": "179",
              "encrypted_media_path": "NMKyboFo/FhNv/9BOay3vVxrtQv3P02RSz9LOOxLkBvoCGPlohEL8OHZrsGBFWdk",
              "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyHzYnT1aaCCKoW58x9r0sqNNrEsk8aDjG20nH7nLi48FDjc2SoLQe5hw7tS9a8Gtq",
              "explicit_content": 0,
              "featured_artists": "",
              "featured_artists_id": "",
              "has_lyrics": "false",
              "id": "8BsyRlFY",
              "image": "https://c.saavncdn.com/574/Alone-Pt-II-English-2019-20191210153050-500x500.jpg",
              "is_dolby_content": false,
              "label": "MER Recordings",
              "label_url": "/label/mer-recordings-albums/qsZ9rf6CKZI_",
              "language": "english",
              "lyrics_snippet": "",
              "media_preview_url": "https://preview.saavncdn.com/574/4411861e25830b64f106f666ebbd7966_96_p.mp4",
              "media_url": "https://aac.saavncdn.com/574/4411861e25830b64f106f666ebbd7966_320.mp4",
              "music": "Alan Walker, Marcus Arnbekk, Alexander Standal Pavelich, Amanda Ava Koci, Halvor Folstad, Dag Holtan-Hartwig, Erik Smaaland, Moa Pettersson Hammar, Carl Hovind, Fredrik Borch Olsen, Ãyvind Sauvik, Gunnar Greve",
              "music_id": "1335467, 3333917, 5936693, 6003540, 820452, 820451, 772800, 6092767, 659013, 1584282, 1584281, 1625408",
              "origin": "album",
              "perma_url": "https://www.jiosaavn.com/song/alone-pt.-ii/SCoYSCZccWo",
              "play_count": "7881898",
              "primary_artists": "Alan Walker, Ava Max",
              "primary_artists_id": "1335467, 3685366",
              "release_date": "2019-12-27",
              "rights": {
              "cacheable": true,
              "code": 0,
              "delete_cached_object": false,
              "reason": ""
              },
              "singers": "Alan Walker, Ava Max, Alan Walker & Ava Max",
              "song": "Alone, Pt. II",
              "starred": "false",
              "starring": "",
              "triller_available": false,
              "type": "",
              "year": "2019"
              },
              {
                "320kbps": "true",
                "album": "STAY",
                "album_url": "https://www.jiosaavn.com/album/stay/KygdkgUbNhY_",
                "albumid": "28263397",
                "artistMap": {
                "Blake Slatkin": "7063111",
                "Charlie Puth": "755042",
                "Charlton Howard": "6830766",
                "Isaac Deboni": "615147",
                "Justin Bieber": "568565",
                "Magnus Høiberg": "774658",
                "Michael Mule": "609475",
                "Omer Fedi": "5124498",
                "Subhaan Rahmaan": "8361961",
                "The Kid LAROI &amp; Justin Bieber": "10954284",
                "The Kid Laroi": "5387954"
                },
                "copyright_text": "(P) 2021 Columbia Records, a Division of Sony Music Entertainment",
                "duration": "140",
                "encrypted_media_path": "NMKyboFo/FhNghGWxDIhjoDXGBYAXeL4LpP4FWbkKshNqujvIqY3T7wPyfxVTQb3",
                "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy22ySPcQSnx3B+iF8BVZQ3e4M9E7vZnhJS+XjJSV0B4lB0xznhm2SlRw7tS9a8Gtq",
                "explicit_content": 1,
                "featured_artists": "",
                "featured_artists_id": "",
                "has_lyrics": "false",
                "id": "kd8JSDbB",
                "image": "https://c.saavncdn.com/895/Stay-English-2021-20210706223809-500x500.jpg",
                "is_dolby_content": false,
                "label": "Columbia",
                "label_url": "/label/columbia-albums/wMrKglyRi74_",
                "language": "english",
                "lyrics_snippet": "",
                "media_preview_url": "https://preview.saavncdn.com/895/9a3f48fb98e9dd0b201f6cacfb554408_96_p.mp4",
                "media_url": "https://aac.saavncdn.com/895/9a3f48fb98e9dd0b201f6cacfb554408_320.mp4",
                "music": "Justin Bieber, Charlton Howard, Blake Slatkin, Omer Fedi, Charlie Puth, Magnus HÃ¸iberg, Michael Mule, Isaac Deboni, Subhaan Rahmaan",
                "music_id": "568565, 6830766, 7063111, 5124498, 755042, 774658, 609475, 615147, 8361961",
                "origin": "album",
                "perma_url": "https://www.jiosaavn.com/song/stay/GwxTeyd0VXE",
                "play_count": "7029170",
                "primary_artists": "The Kid Laroi, Justin Bieber",
                "primary_artists_id": "5387954, 568565",
                "release_date": "2021-07-09",
                "rights": {
                "cacheable": true,
                "code": 0,
                "delete_cached_object": false,
                "reason": ""
                },
                "singers": "The Kid Laroi, Justin Bieber, The Kid LAROI & Justin Bieber",
                "song": "STAY",
                "starred": "false",
                "starring": "",
                "triller_available": false,
                "type": "",
                "year": "2021"
                },
                {
                  "320kbps": "true",
                  "album": "Believer",
                  "album_url": "https://www.jiosaavn.com/album/believer/tXjhb4AnRtk_",
                  "albumid": "14799536",
                  "artistMap": {
                  "Imagine Dragons": "599452",
                  "Lil Wayne": "600822"
                  },
                  "copyright_text": "℗ 2019 KIDinaKORNER/Interscope Records",
                  "duration": "219",
                  "encrypted_media_path": "NMKyboFo/FgiuUNkGYbV+uA5oUg/e83+uSx98uC85USNYhv20e7/CITr6+7XUowu",
                  "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyTgfnj7l4hFmvSTQcwq3905N7vMo3tLw7aYgMqz41xCcoD/Uyz2XLphw7tS9a8Gtq",
                  "explicit_content": 0,
                  "featured_artists": "Lil Wayne",
                  "featured_artists_id": "600822",
                  "has_lyrics": "false",
                  "id": "SdZc6-ST",
                  "image": "https://c.saavncdn.com/128/Believer-English-2018-20190107213710-500x500.jpg",
                  "is_dolby_content": false,
                  "label": "Kid Ina Korner / Interscope",
                  "label_url": "/label/kid-ina-korner--interscope-albums/cI2lEu2R06A_",
                  "language": "english",
                  "lyrics_snippet": "",
                  "media_preview_url": "https://preview.saavncdn.com/128/4155171772fe6ca7302637fcb9384d96_96_p.mp4",
                  "media_url": "https://aac.saavncdn.com/128/4155171772fe6ca7302637fcb9384d96_320.mp4",
                  "music": "",
                  "music_id": "",
                  "origin": "album",
                  "perma_url": "https://www.jiosaavn.com/song/believer/IwwxUkIdZGc",
                  "play_count": "4208144",
                  "primary_artists": "Imagine Dragons",
                  "primary_artists_id": "599452",
                  "release_date": "2019-01-08",
                  "rights": {
                  "cacheable": true,
                  "code": 0,
                  "delete_cached_object": false,
                  "reason": ""
                  },
                  "singers": "Imagine Dragons",
                  "song": "Believer",
                  "starred": "false",
                  "starring": "",
                  "triller_available": false,
                  "type": "",
                  "year": "2019"
                  },
                  {
                    "320kbps": "true",
                    "album": "Girls Like You",
                    "album_url": "https://www.jiosaavn.com/album/girls-like-you/Z1SllYQkM24_",
                    "albumid": "12975468",
                    "artistMap": {
                    "Cardi B": "1261541",
                    "Maroon 5": "597966"
                    },
                    "copyright_text": "℗ 2018 Interscope Records (222 Records)",
                    "duration": "236",
                    "encrypted_media_path": "NMKyboFo/Fhgfgpt+tMQdhk4k75Nrys2ryOjEpsBzR5mhxfhNkBlZ7GlFELXTYp6",
                    "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDygijD/m89xH0ysiesh5n0SM0nlQq3JbUjygW8nNjsSjSPwo++K9XZqhw7tS9a8Gtq",
                    "explicit_content": 0,
                    "featured_artists": "Cardi B",
                    "featured_artists_id": "1261541",
                    "has_lyrics": "false",
                    "id": "idoLJICu",
                    "image": "https://c.saavncdn.com/016/Girls-Like-You-English-2018-20180529030200-500x500.jpg",
                    "is_dolby_content": false,
                    "label": "Interscope Records*",
                    "label_url": "/label/interscope-records*-albums/NB0wm6PHubU_",
                    "language": "english",
                    "lyrics_snippet": "",
                    "media_preview_url": "https://preview.saavncdn.com/016/160a7cfbbf0eff43e3bea7d7278eb94c_96_p.mp4",
                    "media_url": "https://aac.saavncdn.com/016/160a7cfbbf0eff43e3bea7d7278eb94c_320.mp4",
                    "music": "",
                    "music_id": "",
                    "origin": "album",
                    "perma_url": "https://www.jiosaavn.com/song/girls-like-you/GQwEfT55dEY",
                    "play_count": "45573161",
                    "primary_artists": "Maroon 5",
                    "primary_artists_id": "597966",
                    "release_date": "2018-05-31",
                    "rights": {
                    "cacheable": true,
                    "code": 0,
                    "delete_cached_object": false,
                    "reason": ""
                    },
                    "singers": "Maroon 5",
                    "song": "Girls Like You",
                    "starred": "false",
                    "starring": "",
                    "triller_available": false,
                    "type": "",
                    "vcode": "010912291154253",
                    "vlink": "https://jiotunepreview.jio.com/content/Converted/010912291110460.mp3",
                    "year": "2018"
                    }
    ];

    const [trackIndex, setTrackIndex] = useState(0);

  return (
    <div>
      <div className="top-section">
        <div className="left-section">
          <TopPlayer tracks={tracks} current={trackIndex} />
        </div>
          <NowPlayingPlaylist tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
      </div>
      <BottomPlayer tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
    </div>
  )
}

export default MusicPlayer
