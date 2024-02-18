import {NextResponse} from "next/server";

export async function GET(req,res){
    if (req.method === 'GET'){

    }
    return NextResponse.json([
        {
            name: 'Emre House',
            typesx: 'appointment land all',
            price: '3200',
            img: 'home1',
            location: 'Chicago',
            image: 'home1',
            bed: '4',
            bath: '3',
            like: true,
            door: '12',
        },
        {
            name: 'Hakan House',
            typesx: 'home land all',
            price: '3200',
            img: 'home2',
            location: 'Turkey',
            image: 'home2',
            bed: '1',
            bath: '1',
            like: false,
            door: '3',
        },

        {
            name: 'Ata House',
            typesx:  'home land appointment all',
            price: '3100',
            img: 'home3',
            location: 'Berlin',
            image: 'home3',
            bed: '4',
            bath: '3',
            like: false,
            door: '31',
        },
        {
            name: 'Buse House',
            typesx: 'home appointment all',
            price: '3100',
            img: 'home2',
            location: 'Berlin',
            image: 'home4',
            bed: '4',
            bath: '3',
            like: false,
            door: '31',
        },
        {
            name: 'Emre2 House',
            typesx: 'house, appointment all',
            price: '3100',
            img: 'home3',
            location: 'Berlin',
            image: 'home3',
            bed: '4',
            bath: '3',
            like: true,
            door: '31',
        }
    ]
    )
}
