import React from 'react';
import {Item, Table} from '../ui-components/infoDisplay/InfoDisplay'



export default function BasicInput() {

  return (
      <div>
          <h2>Model Items</h2>
          <h3>clear</h3>
          <Item model="clear">Clear</Item>
          <h3>accent</h3>
          <Item model="accent">Accent</Item>
          <h3>accent_ligth</h3>
          <Item model="accent_ligth">Accent_Ligth</Item>
          <h3>dark</h3>
          <Item model="dark">Dark</Item>
          <h2>Tables</h2>
          <Table name={geneInfo.name} data={geneInfo}/>
          <br/>
          <Table name={"Reference"} data={externalCrossReferences}/>
          <br/>
          <br/>
      </div>
  )
}
/* 

*/

const geneInfo = {
  "lri": "RDBECOLIGN00001",
  "organism": "ECK12",
  "name": "fimB",
  "bnumber": "b4312",
  "giRefSeq": 0,
  "leftEndPosition": 4540957,
  "rightEndPosition": 4541559,
  "strand": "forward",
  "sequence": "ATGAAGAATAAGGCTGATAACAAAAAAAGGAACTTCCTGACCCATAGTGAAATCGAATCACTCCTTAAAGCAGCAAATACCGGGCCTCATGCAGCACGTAATTATTGTCTGACTTTGCTTTGTTTTATTCATGGTTTCCGGGCGAGTGAAATTTGTCGATTGAGGATTTCGGATATTGATCTTAAGGCAAAGTGTATATATATCCATCGATTAAAAAAAGGCTTTTCAACAACGCACCCGCTATTGAATAAAGAAGTTCAGGCTTTAAAAAACTGGTTGAGTATCCGTACTTCGTACCCGCATGCTGAGAGCGAGTGGGTATTTTTATCACGTAAGGGGAATCCGCTTTCTCGGCAACAGTTTTACCATATTATCTCGACTTCCGGTGGTAATGCCGGGTTGTCACTGGAGATTCATCCGCACATGTTACGCCATTCGTGTGGTTTTGCTTTGGCGAATATGGGAATAGATACGCGACTTATCCAGGATTATCTTGGGCATCGCAATATTCGTCATACTGTCTGGTATACCGCCAGCAATGCAGGGCGTTTTTACGGCATCTGGGATAGAGCCAGAGGACGACAGCGTCACGCTGTTTTATAG",
  "gcContent": 43.45,
  "centisomePosition": 97.83062,
  "note": "<br><i>fimB</i> transcription is regulated by growth phase and its repression require the alternative sigma factor, RpoS during enter stationary phase. Although the mechanism by which RpoS achieves negative control is unknown it is possible that the effect on <i>fimB</i> is exerted indirectly |CITS:[9108285]|.<br>By making use of microarray analysis, Constantinidou et al |CITS: [16377617]| concluded that FNR represses  <i>fimB</i> gene expression, but it is not know which of the three promoters (<i>fimB</i>p1, <i>fimB</i>p2, <i>fimB</i>p3) is affected. They also identified a putative FNR binding site upstream of the gene, but the sequence was not shown.",
  "type": "gene"
}

const externalCrossReferences = [{
  "name": "String",
  "url": "http://string-db.org/newstring_cgi/show_network_section.pl?identifier=511145.b4312",
  "externaldbObjectId": "511145.b4312",
},
{
  "name": "ASAP",
  "url": "http://asap.ahabs.wisc.edu/asap/feature_info.php?FeatureID=ABE-0014141",
  "externaldbObjectId": "ABE-0014141"
},
{
  "name": "OU-Microarray",
  "url": "https://genexpdb.okstate.edu/databases/genexpdb/?query=b4312",
  "externaldbObjectId": "b4312"
},
{
  "name": "Coli Genetic Stock Center",
  "url": "http://cgsc.biology.yale.edu/Site.php?ID=18355",
  "externaldbObjectId": "18355"
},
{
  "name": "PortEco",
  "url": "http://porteco.org/AjaxSearch.jsp?searchString=fimB",
  "externaldbObjectId": "fimB"
},
{
  "name": "EchoBASE",
  "url": "http://www.york.ac.uk/res/thomas/Gene.cfm?recordID=EB0305",
  "externaldbObjectId": "EB0305"
},
{
  "name": "RegulonDB",
  "url": "http://regulondb.ccg.unam.mx/search?term=b4312&organism=ECK12&type=All",
  "externaldbObjectId": "b4312"
}
]