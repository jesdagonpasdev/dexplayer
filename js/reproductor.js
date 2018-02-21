var container = $('.visualizacion');
var barraV = $('#barravolumen');
var textoR = $('.reproduciendo');
var reproBarra = $('#medidorcancion');

var cont = 0;
var estadoMultimedia = true;
var multimedias = [];
var multActual, volActual;
var intervalR, esAudio;

$(document).ready(function () {
    volActual = 0.5;
    esAudio = false;
    var video1 = $('<video />', {
        id: 'video1',
        src: 'video/mivideo_HD.mp4',
        type: 'video/mp4'
    });
    multimedias.push(video1);
    video1.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#videoMi').removeClass('cajetillaSelec');
        $('#videoMi').addClass('cajetilla');
        $('#audioHavana').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[1];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));
        container.append('<img src="images/havana.jpg" width="400px" height="400px" style="margin-top: 15px;">');
        multActual.appendTo(container);
        esAudio = true;
        textoR.text("Havana - Camila Cabello ft. Daddy Yankee");
        reproBarra.attr("max", 200);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    var audio1 = $('<audio />', {
        id: 'audio1',
        src: 'audio/havana.mp3',
        type: 'audio/mp3',
        poster: 'images/havana.jpg'
    });
    multimedias.push(audio1);
    audio1.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#audioHavana').removeClass('cajetillaSelec');
        $('#audioHavana').addClass('cajetilla');
        $('#videoMp4').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[2];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));

        multActual.appendTo(container);
        esAudio = false;
        textoR.text("Pokemon Go Trailer - MP4");
        reproBarra.attr("max", 60);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    var video2 = $('<video />', {
        id: 'video2',
        src: 'video/pokemongo.mp4',
        type: 'video/mp4'
    });
    multimedias.push(video2);
    video2.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#videoMp4').removeClass('cajetillaSelec');
        $('#videoMp4').addClass('cajetilla');
        $('#audioSepreparo').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[3];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));
        container.append('<img src="images/se_preparo.jpg" width="400px" height="400px" style="margin-top: 15px;">');
        multActual.appendTo(container);
        esAudio = true;
        textoR.text("Se Preparó - Ozuna");
        reproBarra.attr("max", 190);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    var audio2 = $('<audio />', {
        id: 'audio2',
        src: 'audio/se_preparo.mp3',
        type: 'audio/mp3',
        poster: 'images/se_preparo.jpg'
    });
    multimedias.push(audio2);
    audio2.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#audioSepreparo').removeClass('cajetillaSelec');
        $('#audioSepreparo').addClass('cajetilla');
        $('#videoOgg').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[4];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));

        multActual.appendTo(container);
        esAudio = false;
        textoR.text("Pokemon Go Trailer - OGG");
        reproBarra.attr("max", 60);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    var video3 = $('<video />', {
        id: 'video3',
        src: 'video/pokemongo.ogg',
        type: 'video/ogg'
    });
    multimedias.push(video3);
    video3.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#videoOgg').removeClass('cajetillaSelec');
        $('#videoOgg').addClass('cajetilla');
        $('#audioSensualidad').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[5];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));
        container.append('<img src="images/sensualidad.jpg" width="400px" height="400px" style="margin-top: 15px;">');
        multActual.appendTo(container);
        esAudio = true;
        textoR.text("Sensualidad - Bad Bunny ft. P.Royce ft. J Balvin");
        reproBarra.attr("max", 267);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    var audio3 = $('<audio />', {
        id: 'audio3',
        src: 'audio/sensualidad.mp3',
        type: 'audio/mp3',
        poster: 'images/sensualidad.jpg'
    });
    multimedias.push(audio3);
    audio3.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#audioSensualidad').removeClass('cajetillaSelec');
        $('#audioSensualidad').addClass('cajetilla');
        $('#videoWebm').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[6];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));

        multActual.appendTo(container);
        esAudio = false;
        textoR.text("Pokemon Go Trailer - WEBM");
        reproBarra.attr("max", 60);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    var video4 = $('<video />', {
        id: 'video4',
        src: 'video/pokemongo.webm',
        type: 'video/webm'
    });
    multimedias.push(video4);
    video4.on('ended', function () {
        cont = 0;
        if (intervalR != null) {
            clearInterval(intervalR);
        }
        $('#videoWebm').removeClass('cajetillaSelec');
        $('#videoWebm').addClass('cajetilla');
        $('#videoMi').addClass('cajetillaSelec');
        container.children().remove();
        multActual = multimedias[0];
        multActual.volume = volActual;

        barraV.attr('value', (volActual * 10));
        let sourceHD = '<source media="(min-width: 720px)" srcset="video/mivideo_HD.mp4">';
        let source480 = '<source media="(min-width: 480px)" srcset="video/mivideo_480.mp4">';
        let subtitulos = '<track label="Español" kind="subtitles" srclang="es" src="video/subtitulos.vtt" default>';
        multActual.append(source480);
        multActual.append(sourceHD);
        multActual.append(subtitulos);
        multActual.appendTo(container);
        esAudio = false;
        textoR.text("VideoTutorial - Descargar video YouTube");
        reproBarra.attr("max", 146);
        reproBarra.attr("min", 0);
        multActual.get(0).play();
        start();
    });

    multActual = multimedias[0];
    multActual.volume = volActual;
    console.log(multimedias.indexOf(multActual));
    barraV.attr('value', (volActual * 10));
    let sourceHD = '<source media="(min-width: 720px)" srcset="video/mivideo_HD.mp4">';
    let source480 = '<source media="(min-width: 480px)" srcset="video/mivideo_480.mp4">';
    let subtitulos = '<track label="Subtitulo español" kind="subtitles" srclang="es" src="../video/subtitulos.vtt" default>';
    multActual.append(source480);
    multActual.append(sourceHD);
    multActual.append(subtitulos);
    multActual.appendTo(container);
    textoR.text("VideoTutorial - Descargar video YouTube");
    reproBarra.attr("max", 146);
    reproBarra.attr("min", 0);
    multActual.get(0).play();
    start();
})

$('#estado').click(function () {
    var actual;
    if (esAudio) {
        actual = container.children().last();
        console.log(actual);
    } else {
        actual = container.children().first();
    }
    if (estadoMultimedia) {
        actual.get(0).pause();
        $(this).removeClass('icon-pause2');
        $(this).addClass('icon-play3');
        estadoMultimedia = false;
        if (intervalR != null) {
            clearInterval(intervalR);
            console.log("entre a parar");
        }
    } else {
        actual.get(0).play();
        $(this).removeClass('icon-play3');
        $(this).addClass('icon-pause2');
        estadoMultimedia = true;
        if (intervalR != null) {
            start();
            console.log("entre a empezar");
        }
    }
    console.log(actual.get(0).currentTime);
});

$('.icon-previous2').click(function () {
    var actual;
    if (esAudio) {
        actual = container.children().last();
    } else {
        actual = container.children().first();
    }
    actual.get(0).currentTime -= 10;
    cont -= 10;
    reproBarra.attr("value", cont);
});

$('.icon-next2').click(function () {
    var actual;
    if (esAudio) {
        actual = container.children().last();
    } else {
        actual = container.children().first();
    }
    console.log(actual.currentTime);
    actual.get(0).currentTime += 10;
    cont += 10;
    reproBarra.attr("value", cont);
});

$('.icon-volume-decrease').click(function () {
    var actual;
    if (esAudio) {
        actual = container.children().last();
    } else {
        actual = container.children().first();
    }
    volActual -= 0.1;
    barraV.attr('value', (volActual * 10));
    console.log(volActual);
    if (volActual < 0) {
        volActual = 0;
    }
    actual.get(0).volume = volActual;
});

$('.icon-volume-increase').click(function () {
    var actual;
    if (esAudio) {
        actual = container.children().last();
    } else {
        actual = container.children().first();
    }
    volActual += 0.1;
    barraV.attr('value', (volActual * 10));
    console.log(volActual);
    if (volActual > 1) {
        volActual = 1;
    }
    actual.get(0).volume = volActual;
});

function start() {
    intervalR = setInterval(function () {
        reproBarra.attr("value", cont);
        cont++;
    }, 1000);
}

$('.cajetilla').click(function () {
    let pulsado = $(this).attr('id');
    var divCS = $('.cajetillaSelec');
    switch (pulsado) {
        case 'videoMi':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#videoMi').removeClass('cajetilla');
            $('#videoMi').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[0];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));
            let sourceHD = '<source media="(min-width: 720px)" srcset="video/mivideo_HD.mp4">';
            let source480 = '<source media="(min-width: 480px)" srcset="video/mivideo_480.mp4">';
            let subtitulos = '<track label="Español" kind="subtitles" srclang="es" src="video/subtitulos.vtt" default>';
            multActual.append(source480);
            multActual.append(sourceHD);
            multActual.append(subtitulos);
            multActual.appendTo(container);
            esAudio = false;
            textoR.text("VideoTutorial - Descargar video YouTube");
            reproBarra.attr("max", 146);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
            break;
        case 'audioHavana':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#audioHavana').removeClass('cajetilla');
            $('#audioHavana').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[1];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));
            container.append('<img src="images/havana.jpg" width="400px" height="400px" style="margin-top: 15px;">');
            multActual.appendTo(container);
            esAudio = true;
            textoR.text("Havana - Camila Cabello ft. Daddy Yankee");
            reproBarra.attr("max", 200);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
            break;
        case 'videoMp4':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#videoMp4').removeClass('cajetilla');
            $('#videoMp4').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[2];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));

            multActual.appendTo(container);
            esAudio = false;
            textoR.text("Pokemon Go Trailer - MP4");
            reproBarra.attr("max", 60);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
            break;
        case 'audioSepreparo':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#audioSepreparo').removeClass('cajetilla');
            $('#audioSepreparo').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[3];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));
            container.append('<img src="images/se_preparo.jpg" width="400px" height="400px" style="margin-top: 15px;">');
            multActual.appendTo(container);
            esAudio = true;
            textoR.text("Se Preparó - Ozuna");
            reproBarra.attr("max", 190);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
            break;
        case 'videoOgg':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#videoOgg').removeClass('cajetilla');
            $('#videoOgg').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[4];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));

            multActual.appendTo(container);
            esAudio = false;
            textoR.text("Pokemon Go Trailer - OGG");
            reproBarra.attr("max", 60);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
            break;
        case 'audioSensualidad':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#audioSensualidad').removeClass('cajetilla');
            $('#audioSensualidad').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[5];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));
            container.append('<img src="images/sensualidad.jpg" width="400px" height="400px" style="margin-top: 15px;">');
            multActual.appendTo(container);
            esAudio = true;
            textoR.text("Sensualidad - Bad Bunny ft. P.Royce ft. J Balvin");
            reproBarra.attr("max", 267);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
            break;
        case 'videoWebm':
            cont = 0;
            if (intervalR != null) {
                clearInterval(intervalR);
            }
            divCS.removeClass('cajetillaSelec');
            divCS.addClass('cajetilla');
            $('#videoWebm').removeClass('cajetilla');
            $('#videoWebm').addClass('cajetillaSelec');
            container.children().remove();
            multActual = multimedias[6];
            multActual.volume = volActual;

            barraV.attr('value', (volActual * 10));

            multActual.appendTo(container);
            esAudio = false;
            textoR.text("Pokemon Go Trailer - WEBM");
            reproBarra.attr("max", 60);
            reproBarra.attr("min", 0);
            multActual.get(0).play();
            start();
    }
});