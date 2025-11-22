var config = {
     style: 'mapbox://styles/alvaroperez85/cmi4n7kvl001101sacj2mem48',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWx2YXJvcGVyZXo4NSIsImEiOiJjbWk0ZGJ1YXMwenBiMmpxcjcycmIwaDMwIn0.SB2YyDrFwMuJk3VLPte3PA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Faros La Palma',
    subtitle: 'Storymaps de faros de la Palma',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Faro de punta lava',
            image: 'https://es.wikipedia.org/wiki/Faro_de_Punta_Lava#/media/Archivo:Faro_de_Punta_Lava_2014-11.JPG',
            description: 'El faro de Punta Lava o faro de Punta del Moro es un faro situado en Tazacorte, al oeste de la isla de La Palma, en el archipiélago de las Islas Canarias, España. Es uno de los cuatro principales faros de La Palma, ya que cada uno marca un punto cardinal de la isla. El faro de Arenas Blancas en la costa oriental, el de Punta Lava en la parte occidental de la isla, el faro de Punta Cumplida está situado en el punto norte y el faro de Fuencaliente en el sur. Está gestionado por la autoridad portuaria de la Provincia de Santa Cruz de Tenerife.',
            location: {
                center: [
                    -17.9350771462223,
                    28.5950082441444
                ],
                zoom: 11.70,
                pitch: 63.90,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Faro de Fuencaliente',
            image: 'https://es.wikipedia.org/wiki/Faro_de_Fuencaliente#/media/Archivo:At_La_Palma_2020_247.jpg',
            description: 'El faro de Fuencaliente se encuentra en la punta sur de la isla de La Palma (Canarias, España), en el municipio de Fuencaliente. Se encuentra en el parque natural de Cumbre Vieja y a su alrededor se encuentran las Salinas de Fuencaliente, las playas del Faro de Fuencaliente, la de Echentive y la antigua Fuente Santa.',
            location: {
                center: [
                    -17.8408837424666,
                    28.448839267056
                ],
                zoom: 11.60,
                pitch: 0,
                bearing: 66,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Faro de punta cumplida',
            image: 'https://es.wikipedia.org/wiki/Faro_de_Punta_Lava#/media/Archivo:Faro_de_Punta_Lava_2014-11.JPG',
            description:'El faro de Punta Cumplida es un faro situado en la localidad de Barlovento, en la isla de La Palma (provincia de Santa Cruz de Tenerife, Canarias, España).',
            location: {
                center: [
                    -17.7545362197694,
                    28.5700706993616
                ],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 63.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Faro de Barlovento',
            image: 'https://es.wikipedia.org/wiki/Faro_de_Punta_Cumplida#/media/Archivo:Faro_de_Punta_Cumplida.jpg',
            description: 'El faro de Punta Cumplida es un faro situado en la localidad de Barlovento, en la isla de La Palma (provincia de Santa Cruz de Tenerife, Canarias, España).',
            location: {
                center: [
                    -17.7713617654371,
                    28.8412990417957
                ],
                zoom: 12.52,
                pitch: 9.99,
                bearing: 63.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
