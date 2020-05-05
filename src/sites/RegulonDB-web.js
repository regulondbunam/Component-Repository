import React from 'react';
import Cover from '../ui-components/regulonDB-web/Cover'

const urlVideo = "https://dl.dropboxusercontent.com/s/77wgabtmnyox8i8/Bacteria%20under%20the%20Microscope%20%28E%20%20coli%20and%20S%20%20aureus%29%5B2%5D.mp4?dl=0"
const otherVid = "https://dl.dropboxusercontent.com/s/zoojwulu5p1wfrm/Bacteria.mp4?dl=0"

export default function BasicInput() {

    return (
        <div>
            <h2>Cover</h2>
            <h3>Cover whit Video</h3>
            <br />
            <Cover title={"Ecoli - Information"} videoUrl={urlVideo} />
            <br />
            <h3>Cover whit Image</h3>
            <Cover title="DNA - DeoxyriboNucleic Acid" />
            <h3>Cover whit Images</h3>
            <h3>Cover whit Links</h3>
            <br />
            <br />
            <br />
        </div>
    )

}