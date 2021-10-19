import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";
import "./ProgressBar.css";
import {
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsFillPlayFill,
  BsPauseFill,
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsVolumeMuteFill,
  BsArrowsAngleExpand,
  BsArrowsAngleContract,
} from "react-icons/bs";

const MusicPlayer = () => {
  const musicUrls = [
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Will Smith": "521424",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "195",
      encrypted_media_path:
        "NMKyboFo/Fic0eFju1YSPktOPvabz10NHUtFjAL+BcK6mrdhvBmZMsAPdvWh22OC",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDywm2JdUIj2XH1qOK8tUv34mc3k3Oa712+I7XXAPv+A7AFW15ROJSfChw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "P-4Qwdd4",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/85ae9e0cad54f8f67d12547d60e9d684_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/85ae9e0cad54f8f67d12547d60e9d684_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/arabian-nights-2019-from-aladdinsoundtrack-version/IEVfYANUUwc",
      play_count: "462857",
      primary_artists: "Will Smith",
      primary_artists_id: "521424",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Will Smith",
      song: "Arabian Nights (2019) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Mena Massoud": "6419827",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "175",
      encrypted_media_path:
        "NMKyboFo/Fic0eFju1YSPqYwUG7kYVtkZoAMMCubY8GXs3DHDBf3P2atX5KDqMOn",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyO+sbVbFxKQ2D35x2UPWnznKTylK/lkS0OQP3skyL9oZ8QBd9FcVdJBw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "2svMDKUt",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/893a06d17f2dc1ab4dc08508363db8f9_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/893a06d17f2dc1ab4dc08508363db8f9_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/one-jump-ahead-from-aladdinsoundtrack-version/QhsdfDB7Ykc",
      play_count: "149003",
      primary_artists: "Mena Massoud",
      primary_artists_id: "6419827",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Mena Massoud",
      song: "One Jump Ahead (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Mena Massoud": "6419827",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "60",
      encrypted_media_path:
        "NMKyboFo/FjDPd5ouZoOwmCI9pRysBjlEeEme9eHKTLyysqY15bGVgE1GIp0DiJw",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDymCtbVSXU0mQtqN3VBudkcTxllRYemJSEd3fOyHjFNJTyJEDOcMjwcxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "LawbSSc_",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/a93c54fcc6d7472f1b65358d51c4137e_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/a93c54fcc6d7472f1b65358d51c4137e_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/one-jump-ahead-reprise-from-aladdinsoundtrack-version/PAkcUydjVGw",
      play_count: "53761",
      primary_artists: "Mena Massoud",
      primary_artists_id: "6419827",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Mena Massoud",
      song: "One Jump Ahead (Reprise) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Naomi Scott": "603647",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "77",
      encrypted_media_path:
        "NMKyboFo/FhepUgOxXObca0oOS+vxg0v36qcDXlFmOkN9py6aa+QmxOT3TSGiboT",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyBL9LPA+DP2Bnje5sNBPGBMpRVDtRlzuPfTlewNXNNp5eMgy0uYJsUhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "JbnYDf8Y",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/56d4a9335de876ea229f6759f8ef868f_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/56d4a9335de876ea229f6759f8ef868f_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/speechless-part-1-from-aladdinsoundtrack-version/OgoFaDBWD2o",
      play_count: "136230",
      primary_artists: "Naomi Scott",
      primary_artists_id: "603647",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Naomi Scott",
      song: "Speechless (Part 1) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Will Smith": "521424",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "155",
      encrypted_media_path:
        "NMKyboFo/Fh+PEtILa3ebuX3d6qioRaFa1i2doxHMhMl2O+mDIW12ojUHj2cmTfG",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDylftMtZJ9tC1ygp51fiI0EcNuCPduGvj4KmIpesM4R9qAbawXKwVcNxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "GS6GiDnj",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/092b2d37693c42aa818145d24d551443_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/092b2d37693c42aa818145d24d551443_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/friend-like-me-from-aladdinsoundtrack-version/Nztddh10WVk",
      play_count: "212295",
      primary_artists: "Will Smith",
      primary_artists_id: "521424",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Will Smith",
      song: "Friend Like Me (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Will Smith": "521424",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "209",
      encrypted_media_path:
        "NMKyboFo/FhepUgOxXObcZm2waSMwuGShhpSGmZ3OO1/CiDsfIXg81ChkhacTqE7",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDybBYlacV7yDxT9PEvEd7tLSzPQ+XHHyi1wxRJON9W38N5A3L78q15gRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "qoxU6n2E",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/5c96fbcb05c97f3d57d9cdb493f5b1c3_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/5c96fbcb05c97f3d57d9cdb493f5b1c3_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/prince-ali-from-aladdinsoundtrack-version/AQcTZEJeBXY",
      play_count: "237580",
      primary_artists: "Will Smith",
      primary_artists_id: "521424",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Will Smith",
      song: "Prince Ali (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Mena Massoud": "6419827",
        "Naomi Scott": "603647",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "175",
      encrypted_media_path:
        "NMKyboFo/FgNEl93tEviNlH+RPPZCdIoNnSbigcnV0gdyd51P9KJr50Ek4AlN8PU",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyso7HK9pNtWq2RxlYu+d2EHs73hHq6VVTPi3OnRBNUvCLUrGl2H7lThw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "saxUN53B",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/1dc2c25a2601fd532b003bb99ab563bb_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/1dc2c25a2601fd532b003bb99ab563bb_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/a-whole-new-world-from-aladdinsoundtrack-version/AwkTZDoFBHE",
      play_count: "473303",
      primary_artists: "Mena Massoud, Naomi Scott",
      primary_artists_id: "6419827, 603647",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Mena Massoud, Naomi Scott",
      song: "A Whole New World (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Mena Massoud": "6419827",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "66",
      encrypted_media_path:
        "NMKyboFo/Fg5o/kI9pbHo1hIkmczpqdBLo7aqpq9552RboCppQakGmeW7RyNCrbM",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyMc2szarX/WnFDQ1nNUDf/sPuJv8OTKEcvDPCsdEs3PDSKlfVK0d9Yhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "5g9fsHs0",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/d2c429998ded2b7094a88b90da113eac_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/d2c429998ded2b7094a88b90da113eac_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/one-jump-ahead-reprise-2-from-aladdinsoundtrack-version/RQ9SVwd4RAM",
      play_count: "54905",
      primary_artists: "Mena Massoud",
      primary_artists_id: "6419827",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Mena Massoud",
      song: "One Jump Ahead (Reprise 2) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Naomi Scott": "603647",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "144",
      encrypted_media_path:
        "NMKyboFo/Fh+PEtILa3ebs6u+Q90J9eo87uMIwzoD2f5d5sLTcnkU/mr17yEzZHU",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyPV6qMEsCRxGG5Xz1NgXUcw7fwCUq68EzfE4FLLJ3v6SgytfckwFFlhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "C_K6o1yc",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/0222de102fb3c4d2a87e63a2e55d2681_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/0222de102fb3c4d2a87e63a2e55d2681_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/speechless-part-2-from-aladdinsoundtrack-version/MzcgBxsBTlA",
      play_count: "162330",
      primary_artists: "Naomi Scott",
      primary_artists_id: "603647",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Naomi Scott",
      song: "Speechless (Part 2) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Zayn Malik": "577203",
        "Zhavia Ward": "4834503",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "242",
      encrypted_media_path:
        "NMKyboFo/Fj3eQ4Tj6jWXdK05WR6bkzMWaWKgUyrQ3WFzYpBF7KyNdRPNkPr5QUq",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyj2ntVXulwNn86Uv+gxvGyO6XLDPY+H81atP99jlk3qosyQ2KDOjemxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "GairlQt2",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/493d4d74fb73bd133943a0019ba9fb1c_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/493d4d74fb73bd133943a0019ba9fb1c_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/a-whole-new-world-end-title-from-aladdinsoundtrack-version/NwkCQxhhQwE",
      play_count: "2035261",
      primary_artists: "Zayn Malik, Zhavia Ward",
      primary_artists_id: "577203, 4834503",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Zayn Malik, Zhavia Ward",
      song: "A Whole New World (End Title) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      vcode: "010912291152073",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010912291108349.mp3",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "DJ Khaled": "599255",
        "Will Smith": "521424",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "159",
      encrypted_media_path:
        "NMKyboFo/Fi4/FAnAewkPsGYJiWVS1Mg/1UFOaVLRoM2Xoqnyi+e0z4CmzcnjGNQ",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyaCXR7NgvqYfAdBP5WqvUprKnwlQh+S0Zx5QZsMXNwev1CLn4YZDtlhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "DJ Khaled",
      featured_artists_id: "599255",
      has_lyrics: "false",
      id: "GCfJ_0eQ",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/b57ea5568fe2ba5582f8e339dd154d91_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/b57ea5568fe2ba5582f8e339dd154d91_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/friend-like-me-end-title-from-aladdinsoundtrack-version/NysNeysAUmI",
      play_count: "132789",
      primary_artists: "Will Smith",
      primary_artists_id: "521424",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Will Smith",
      song: "Friend Like Me (End Title) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      vcode: "010912291152136",
      vlink:
        "https://jiotunepreview.jio.com/content/Converted/010912291108412.mp3",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Naomi Scott": "603647",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "208",
      encrypted_media_path:
        "NMKyboFo/FjiaesZmBYzOkl/rhvcObagoFHdXkW8fRfxo1ZFNBDTvc6HijzNnQlb",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyr2Y9stvVzvfGLq62anjThsRjc+JJwPcSYSTdcJlkhbMlCwid9EFHWRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "2A_cbDJv",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/226a30dca17327f228dc2a12d683fdbe_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/226a30dca17327f228dc2a12d683fdbe_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/speechless-full-from-aladdinsoundtrack-version/Qik0UhZ0fUU",
      play_count: "871737",
      primary_artists: "Naomi Scott",
      primary_artists_id: "603647",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Naomi Scott",
      song: "Speechless (Full) (From 'Aladdin'/Soundtrack Version)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "77",
      encrypted_media_path:
        "NMKyboFo/Fj+RaQI9buo7bamkhTX+oGA1anLU5AKlE7pBR5MCwViju1un/t9Z5ih",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyGL7M5jDkvIAsqyQ9JrFxbOG8I3RiWMi/a+r0VNWLnfrMNINmP51D1Bw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "NvunI07-",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/6ed0ffdd9039b1d9dff7ff8ab696684f_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/6ed0ffdd9039b1d9dff7ff8ab696684f_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/the-big-ship-from-aladdinscore/Ph4eXz0AAB4",
      play_count: "52037",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "The Big Ship (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "113",
      encrypted_media_path:
        "NMKyboFo/FjHRBod2ituRXxGelS80QYzDdZxs0MlI8V1mvsU67lEy/0PGKgkJg77",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyxuL5sWLNtSlDZh40IYtl3v/h1xeuYAB6zbji0ykPPSSQsOMRLVQkrRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "BtPJD1DX",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/9de35466258f69630b2898d58db33aba_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/9de35466258f69630b2898d58db33aba_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/agrabah-marketplace-from-aladdinscore/Mhw7ezABc2s",
      play_count: "41440",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Agrabah Marketplace (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "115",
      encrypted_media_path:
        "NMKyboFo/Fh+PEtILa3ebrNPoV5KcigbV5ULzeP+mWaMc5weaB/QSxBvJdqIfY56",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy2H8nBx5w13hSVwGBrBoHBoq5OYu8DyHLZxAUrcpqBVrp9pCwseH5Xxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "_I8O7d34",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/09be176a3445096ccb11c72f64da7c18_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/09be176a3445096ccb11c72f64da7c18_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/aladdins-hideout-from-aladdinscore/LyFTfkNUBAc",
      play_count: "28050",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Aladdin's Hideout (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "34",
      encrypted_media_path:
        "NMKyboFo/Fj1raMcJ1k0uqEUUIj34j6ZaWS+lUs+vXmGJOrGGimL9Q8Z/E2B+CMz",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy/GQVlcOBtDwXYhiSN3GJHIt7yGfzRnYt52rsQcLhe4bmak80Md9puBw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "fpoeegT5",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/39c0e78e4c57445975f8db2db099b1d0_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/39c0e78e4c57445975f8db2db099b1d0_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/jasmine-meets-prince-anders-from-aladdinscore/FhgEVBFXYwY",
      play_count: "25198",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Jasmine Meets Prince Anders (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "106",
      encrypted_media_path:
        "NMKyboFo/FgAYW3+PyovVnznqwgDVq8RY7TAsYBgA3ODQz7qhgpXrwIGc1zBv8C9",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyqEeoI/3bFdtFpeRvY2+oQ9beNAHBWf8IzKF4u5aVXram+Jcbptas6Bw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "mwbRgLzS",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/7661e2645fb14f3cde25c4078555e006_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/7661e2645fb14f3cde25c4078555e006_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/breaking-in-from-aladdinscore/HR8JYxN8TWA",
      play_count: "23767",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Breaking In (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "58",
      encrypted_media_path:
        "NMKyboFo/Fj/z7taDZyJHm5Nm7NEHiUxfriL8Zc808zgATqAotUst3bXWRzNa2BQ",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyc5kaUM2XTMVT8Ej2/YCxkv1yygo3NfFW8TJmN4yk31OYoADTSWhX4Rw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "GnFEwhho",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/c738bce12e8936434ee2c4281c57c2b9_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/c738bce12e8936434ee2c4281c57c2b9_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/returning-the-bracelet-from-aladdinscore/NwYtdANYX1w",
      play_count: "18920",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Returning the Bracelet (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "36",
      encrypted_media_path:
        "NMKyboFo/Fh+PEtILa3ebp/UxM3sDccR21lylRwkbDnTf0kuWD2+O3Rre39JZL5d",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjFqZjNbOgidilazkO1xciZfs3oNKSggFv2LVA6yYX6Kk9FWTvd7dgxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "z8o2dTjB",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/0d61417f141a2109163e1a9c90f7fcb2_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/0d61417f141a2109163e1a9c90f7fcb2_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/the-dunes-from-aladdinscore/ClAEAxBkXXE",
      play_count: "16351",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "The Dunes (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "51",
      encrypted_media_path:
        "NMKyboFo/Fi4/FAnAewkPk5bMFAIkAAagB0e1mrA7ytI+7gGoHqKWmLkyo99dnOn",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyBPxlKRYDCT1vqq8ROPmueXt41joM1NdhDcLPz/a3NyW2lJjXhpi5Zhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "mlm1IuRd",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/b356c5d33d19dbb61c2a667dd831a8b3_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/b356c5d33d19dbb61c2a667dd831a8b3_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/simple-oil-lamp-from-aladdinscore/HQQGAD1FZVc",
      play_count: "15388",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Simple Oil Lamp (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "163",
      encrypted_media_path:
        "NMKyboFo/Fj1raMcJ1k0uk4qzaVB/CJD9yiVmwECRfd3hVOsd+0Jj+fW3ycN4sGR",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDye03ybSwXl7mJ9/pTbeCkxHWlzBjAw1pcELyw7uREU3mc5riPwEKWTBw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "OiUQoE3r",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/3f63637f044fb65aaa41495b53de3a6b_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/3f63637f044fb65aaa41495b53de3a6b_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/the-cave-of-wonders-from-aladdinscore/PwE,YBt1BEE",
      play_count: "18730",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "The Cave of Wonders (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "98",
      encrypted_media_path:
        "NMKyboFo/FjiaesZmBYzOmA/8Gbp302SKkA3nL3r9HDzM2PCrlYxmO4hk/KzwYET",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyeQr6IdTVIAx+jpc15XNNRZzmz1fuXDRGf52Zoh7Sm+/J13Tcn02SHBw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "XJQfN6Yb",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/27ce1e2522c87793647fdb090a87c763_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/27ce1e2522c87793647fdb090a87c763_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/the-basics-from-aladdinscore/KCI6VzoGblE",
      play_count: "15094",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "The Basics (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "69",
      encrypted_media_path:
        "NMKyboFo/Fj1raMcJ1k0ujRd+E9uxNr3pR01FF6Rjd30w7II+Dkn7oUbur0xcnRU",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDye03ybSwXl7kv/lIktfhg7aWjyX9lmuWVocr9eFZznoEtNNSo/O+RXhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "KTHOhUJJ",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/3f62984c535852d0aede733cd3b0233d_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/3f62984c535852d0aede733cd3b0233d_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/escape-from-the-cave-from-aladdinscore/OzwjfhxlfXk",
      play_count: "13923",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Escape from the Cave (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "138",
      encrypted_media_path:
        "NMKyboFo/FjHRBod2ituRUs0sVTvW1vetxXOCIyxpy47XFDr45gDJa3mQJBUa2an",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyhsUntEdrb9ThclHleWYGLUsH3zmgTYjyBlMHl+33nyd5OFjmPYqVWhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "riTNgfCf",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/91987ca7f0f2cd4cc7cb086ec57459ac_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/91987ca7f0f2cd4cc7cb086ec57459ac_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/prince-alis-outfit-from-aladdinscore/AgE-fxNWdFU",
      play_count: "15315",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Prince Ali's Outfit (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "123",
      encrypted_media_path:
        "NMKyboFo/Fj16ctSIfWrr1AUpy1IOeEuhJTIpc6SsokkMfxQfIKZQsk12mMoxjpJ",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyH56o3FGXmYJVN6IK4s97IS8z/9m3vUpVwQze51KfjfbwhpnRJSUk3xw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "lDxxX3yn",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/e7462bf453e22a4144d6d01b355495c7_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/e7462bf453e22a4144d6d01b355495c7_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/until-tomorrow-from-aladdinscore/HCwTSSwDTl0",
      play_count: "17763",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Until Tomorrow (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "128",
      encrypted_media_path:
        "NMKyboFo/Fj1raMcJ1k0uqGACdn551GeotGSfwKeSgXFCNXga5hKyXc3dYkbTo+p",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyJbsky652f5MQpDnXh0+u7ey7quraYTvMGpZZzTOcz8mK+mRk1VJqHxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "2RnEhZib",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/3bfaf6cd94dea6eaf5dd3e4e4c9394ea_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/3bfaf6cd94dea6eaf5dd3e4e4c9394ea_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/aladdins-second-wish-from-aladdinscore/QjoFdBxqXlE",
      play_count: "13236",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Aladdin's Second Wish (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "145",
      encrypted_media_path:
        "NMKyboFo/FgNEl93tEviNlL7+SGiioZdNKbUd7CS9rA9AucFWXS7PI6lRGYdWr6y",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyxuzzPQQB8bNVZAglx6h24K2rDwIuJLtsjvmhoBr6vtMpXde0zpuFthw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "BFcpryx5",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/1cdce104ec0bc4f9fbca658480a38787_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/1cdce104ec0bc4f9fbca658480a38787_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/never-called-a-master-friend-from-aladdinscore/Mi4IQQZJTwY",
      play_count: "13823",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Never Called a Master Friend (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "146",
      encrypted_media_path:
        "NMKyboFo/Fi4/FAnAewkPiVqRnzHFFJzz67q9OiitmNaE1+XFcIAWgUEBoJllSSt",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyl1s5K9fpT2bGCOEvYaaaUy21fxEppBnyMo/iUVyblnLzDAGzGHDplhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "_qzhiNnZ",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/bd05b48a88cfb737267c59084aa8e834_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/bd05b48a88cfb737267c59084aa8e834_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/harvest-dance-from-aladdinscore/LxkRWR1,WWk",
      play_count: "88049",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Harvest Dance (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "57",
      encrypted_media_path:
        "NMKyboFo/FjiaesZmBYzOo6gBuLP66gP1m6QVpVHmStnlbFGdCAtSZD6qvd7o4XG",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyTCw2inetLK3QMido5sYwmirkCSc8lFsLAZHlSRdPcPIl+fU/53ugjhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "YZ5pQV8V",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/2120a26c846fa2e089f149ee8197e5ac_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/2120a26c846fa2e089f149ee8197e5ac_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/jafar-becomes-sultan-from-aladdinscore/KTJeQSVmD2U",
      play_count: "12587",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Jafar Becomes Sultan (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "73",
      encrypted_media_path:
        "NMKyboFo/FjHRBod2ituRZrXRICOu380vODkA7aaDtnaebXO358fgKZuNn3/sxYD",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyZuzVwiaaDmsrS9oaeReli/7d+v4KdXOWlZ3h0H4fH4z6wgCRmJL6TRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "m80kCFZi",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/9b49149335cb76bacbf21586f15e3a09_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/9b49149335cb76bacbf21586f15e3a09_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/hakims-loyalty-tested-from-aladdinscore/HVBbWjd2bVo",
      play_count: "12191",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Hakim's Loyalty Tested (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "88",
      encrypted_media_path:
        "NMKyboFo/FgAYW3+PyovVm1LQL33rrgYJjDqsCSqrslWUX+Axovpc/sB7qCD8kiA",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy/wdYWWtZWefiJzbX7fxcNjS79cfuxA1yGLQai9fnx6FLGZPCAgRRehw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "urMoNDOH",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/7e5491a55f197b041e91089eb5909a95_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/7e5491a55f197b041e91089eb5909a95_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/most-powerful-sorcerer-from-aladdinscore/BRomXjp0eHs",
      play_count: "12852",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Most Powerful Sorcerer (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "109",
      encrypted_media_path:
        "NMKyboFo/Fi4/FAnAewkPlkiA4svYeHcl1GDr5F1qAmT9mbef+XlDp3mb4kKo5kL",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy7Vn5BtP/a4HUJNSC+41CuBo4XSE9/zmhTFQqq9l/s3Dtc11SvxZhmRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "DbSpEPc-",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/b09738aae0b1d51a4cfd761a007d985a_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/b09738aae0b1d51a4cfd761a007d985a_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/carpet-chase-from-aladdinscore/NAo4QTFgVB4",
      play_count: "12871",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Carpet Chase (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "80",
      encrypted_media_path:
        "NMKyboFo/FgNEl93tEviNmJ0qHT/CxCIWElC6rsagIJcqGjs93Do54rk5Agf5X0u",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyvQgUaVyz3/4UWBx8xoYjT1NajJAEZhXPULjmCukeKi6/a8gdBbrkNRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "Klrj7ZO5",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/15a87fa700eb8c6e9c0e39bf2a7804f5_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/15a87fa700eb8c6e9c0e39bf2a7804f5_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/jafar-summons-the-storm-from-aladdinscore/OwQZW0NqeAY",
      play_count: "11031",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Jafar Summons the Storm (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "217",
      encrypted_media_path:
        "NMKyboFo/FgNEl93tEviNnY0pkhPvQtINYc2Gvl7atdC0wEICgiRmxcmlUDyihHU",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyBDSmWjnEfKmdtGMuMgrKCXmKd9eQi7/BpqbxuBLBHuDgMwfXtp4xThw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "0WlmWsCb",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/110f8dd42970202b12a40151264a244e_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/110f8dd42970202b12a40151264a244e_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/jafars-final-wish-from-aladdinscore/QD8HXCNDdFE",
      play_count: "13673",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Jafar's Final Wish (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "336",
      encrypted_media_path:
        "NMKyboFo/Fj3eQ4Tj6jWXdcUULaTiN9jBLWnL+Iqc68Wfxa/lZ70cOheL4K6u0am",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyV6Us+BhtpuRe2/RKAb1Ciw/XJrz2IPf4DixgDrTL3OoFjPUc8v3Cfhw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "p0omdrNg",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/4532765f4dcc59508a9f57fa12bf417d_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/4532765f4dcc59508a9f57fa12bf417d_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/genie-set-free-from-aladdinscore/AFgEXBBCeVQ",
      play_count: "18465",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Genie Set Free (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "71",
      encrypted_media_path:
        "NMKyboFo/Fj+RaQI9buo7XX+K0ES4JOzmvzzs1AZX5fHZLCSH0+s7hrTiM+Vboio",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDycO3w1Fln4YIh4OS0+0LEAhO0TApKEsRUxFSuFpTApxKA9+o9U4YawRw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "LkHaYcI9",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/61c9b06ed396764bd25db34b39a6e2aa_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/61c9b06ed396764bd25db34b39a6e2aa_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/the-wedding-from-aladdinscore/PAMjUC1Tfgo",
      play_count: "25374",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "The Wedding (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
    {
      "320kbps": "true",
      album: "Aladdin",
      album_url: "https://www.jiosaavn.com/album/aladdin/B6jwxisONUk_",
      albumid: "15948281",
      artistMap: {
        "Alan Menken": "516868",
      },
      copyright_text: "℗ 2019 Walt Disney Records",
      duration: "91",
      encrypted_media_path:
        "NMKyboFo/Fj1raMcJ1k0ujwaO2IfeukWPnhCINW3QL8DruR45dANjwKJckMhit10",
      encrypted_media_url:
        "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyX9XoZcYzg6nhNRT2wpAKHD9Dd7jrFc+aZ5oXbN1gceMUAUMcN9HxAxw7tS9a8Gtq",
      explicit_content: 0,
      featured_artists: "",
      featured_artists_id: "",
      has_lyrics: "false",
      id: "-8Xflfbi",
      image:
        "https://c.saavncdn.com/515/Aladdin-English-2019-20190522032618-500x500.jpg",
      is_dolby_content: false,
      label: "Walt Disney Records",
      label_url: "/label/walt-disney-records-albums/q2Ze67Iybzo_",
      language: "english",
      lyrics_snippet: "",
      media_preview_url:
        "https://preview.saavncdn.com/515/3914a9547a0b7e884ffa3a641a72f116_96_p.mp4",
      media_url:
        "https://aac.saavncdn.com/515/3914a9547a0b7e884ffa3a641a72f116_320.mp4",
      music: "",
      music_id: "",
      origin: "album",
      perma_url:
        "https://www.jiosaavn.com/song/friend-like-me-finale-from-aladdinscore/XVAzVxhWVVo",
      play_count: "42317",
      primary_artists: "Alan Menken",
      primary_artists_id: "516868",
      release_date: "2019-05-22",
      rights: {
        cacheable: true,
        code: 0,
        delete_cached_object: false,
        reason: "",
      },
      singers: "Alan Menken",
      song: "Friend Like Me (Finale) (From 'Aladdin'/Score)",
      starred: "false",
      starring: "",
      triller_available: false,
      type: "",
      year: "2019",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);            // whether song currently playing or not
  const [currentPlaying, setCurrentPlaying] = useState(0);      // to set the current playing song
  const [duration, setDuration] = useState(0);                  // total duration of current song
  const [currentTime, setCurrentTime] = useState(0);            // current time position of the currently playing song
  const [currentVolume, setCurrentVolume] = useState(1);        // current volume of the audioplayer
  const [isExpanded, setIsExpanded] = useState(false);          // whether max-view is expanded or not

  const audioPlayer = useRef();                                 // Audio Player reference declaration
  const progressBar = useRef();                                 // Progress Bar reference declaration
  const volumeBar = useRef();                                   // Volume Bar reference declaration
  const animationRef = useRef();                                // Progress Bar Animation reference declaration

  //sets various properties to player components on metadataload
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    progressBarCssProperties();
    const volume = audioPlayer.current.volume;
    volumeBar.current.max = volume;
    volumeBarCssProperties();
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);   

  //automatically play next song on current song end
  useEffect(() => {
    if (currentTime !== "0" && currentTime === duration.toString()){
      currentPlaying < musicUrls.length - 1 && playNext();
      currentPlaying === musicUrls.length - 1 && reset();
    }
    // eslint-disable-next-line
  }, [currentTime]);

  //play & pause button functionality
  const playPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  // animation properties while current song playing
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current?.currentTime;
    progressBarCssProperties();
    setCurrentTime(progressBar.current?.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // sets input range value on current time change
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBarCssProperties();
    setCurrentTime(progressBar.current.value);
  };

  // change volume on dragging or seeking on range slider
  const changeVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value;
    volumeBarCssProperties();
    setCurrentVolume(volumeBar.current.value);
  };

  const progressBarCssProperties = () => {
    progressBar.current.style.setProperty("--value", progressBar.current.value);
    progressBar.current.style.setProperty(
      "--min",
      progressBar.current.min === "" ? "0" : progressBar.current.min
    );
    progressBar.current.style.setProperty(
      "--max",
      progressBar.current.max === "" ? "100" : progressBar.current.max
    );
    progressBar.current.addEventListener("input", () =>
      progressBar.current.style.setProperty(
        "--value",
        progressBar.current.value
      )
    );
  };

  const volumeBarCssProperties = () => {
    volumeBar.current.style.setProperty("--value", volumeBar.current.value);
    volumeBar.current.style.setProperty(
      "--min",
      volumeBar.current.min === "" ? "0" : volumeBar.current.min
    );
    volumeBar.current.style.setProperty(
      "--max",
      volumeBar.current.max === "" ? "100" : volumeBar.current.max
    );
    volumeBar.current.addEventListener("input", () =>
      volumeBar.current.style.setProperty("--value", volumeBar.current.value)
    );
  };

  // resets player on playlist end
  const reset = () => {
    playPause();
    progressBar.current.value = 0;
    changeRange();
  };

  // play next button functionality
  const playNext = () => {
    isPlaying && reset();
    setCurrentPlaying(currentPlaying + 1);
    audioPlayer.current.load();
    setIsPlaying(true);
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // play previous button functionality
  const playPrev = () => {
    isPlaying && reset();
    setCurrentPlaying(currentPlaying - 1);
    audioPlayer.current.load();
    setIsPlaying(true);
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // calculates into 'mm:ss' format from seconds
  const calculateSeconds = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const changeExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioPlayer}
        preload="metadata"
      >
        <source src={musicUrls[currentPlaying].media_url} />
      </audio>
      {/* <div
        className={isExpanded ? "expanded-view" : "expanded-view disabled"}
      ></div> */}
      <div className="bottom-player">
        {/* <div
          className={isExpanded ? "mini-view disabled-mini-view" : "mini-view"}
        >
          <div className="content-image">
            <img
              src={musicUrls[currentPlaying].image}
              alt={musicUrls[currentPlaying].song}
            />
          </div>
          <div className="content">
            <div className="song-name">{musicUrls[currentPlaying].song}</div>
            <div className="artist-names">
              {musicUrls[currentPlaying].singers}
            </div>
          </div>
        </div> */}
        <div>
          <button
            className="control-btn"
            onClick={playPrev}
            disabled={currentPlaying === 0 ? true : false}
          >
            <BsFillSkipStartFill />
          </button>
          <button className="play-pause" onClick={playPause}>
            {isPlaying ? (
              <BsPauseFill />
            ) : (
              <BsFillPlayFill style={{ marginLeft: "4px" }} />
            )}
          </button>
          <button
            className="control-btn"
            onClick={playNext}
            disabled={currentPlaying === musicUrls.length - 1 ? true : false}
          >
            <BsFillSkipEndFill />
          </button>
        </div>
        <div className="progress">
          <div className="time">{calculateSeconds(currentTime)}</div>
          <input
            type="range"
            className="styled-slider slider-progress"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
          <div className="time">
            {(!isNaN(duration) && calculateSeconds(duration)) ||
              (isNaN(duration) && `0:00`)}
          </div>
        </div>
        <div>
          <div style={{ width: "100px" }}>
            <input
              className="styled-slider slider-progress"
              type="range"
              min="0"
              step="0.01"
              defaultValue="1"
              ref={volumeBar}
              onChange={changeVolume}
            />
          </div>
          <button
            className="control-btn"
            onClick={() => {
              const volume = currentVolume > 0 ? 0 : 1;
              volumeBar.current.value = volume;
              changeVolume();
            }}
          >
            {currentVolume > 0.5 ? (
              <BsFillVolumeUpFill />
            ) : currentVolume <= 0.5 && currentVolume > 0 ? (
              <BsVolumeDownFill />
            ) : (
              <BsVolumeMuteFill />
            )}
          </button>
        </div>
        <div className="expand-btn" onClick={changeExpand}>
          {isExpanded ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
