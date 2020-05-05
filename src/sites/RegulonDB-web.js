import React from 'react';
import Cover from '../ui-components/regulonDB-web/Cover'

const urlVideo = "https://dl.dropboxusercontent.com/s/77wgabtmnyox8i8/Bacteria%20under%20the%20Microscope%20%28E%20%20coli%20and%20S%20%20aureus%29%5B2%5D.mp4?dl=0"
const BacteriaVid = "https://dl.dropboxusercontent.com/s/zoojwulu5p1wfrm/Bacteria.mp4?dl=0"
const imgen = 'https://wallpapercave.com/wp/RHSDmyY.jpg'
const img = 'https://images.unsplash.com/uploads/14114005966624c90b007/60cc31c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

export default function BasicInput() {

    return (
        <div>
            <h2>Cover</h2>
            <h3>Cover whit Video</h3>
            <br />
            <Cover coverType={"video"} title={"Ecoli - Information"} source={urlVideo} opacity={0.2}/>
            <br/>
            <Cover coverType={"video"} title={"Ecoli - Information"} source={BacteriaVid} />
            <br />
            <h3>Cover whit Image</h3>
            <Cover coverType={"imagen"} title="DNA - DeoxyriboNucleic Acid" source={imgen} />
            <br/>
            <Cover coverType={"imagen"} title="Information- Biology" source={img} />
            <h3>Cover whit Links</h3>
            <br />
            <br />
            <br />
        </div>
    )

}