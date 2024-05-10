import React from "react";
import '../styles/expertise.css';
import transition from "../transition";
//Images
import photoShopImage from '../images/ExpertiseImg/PhotoShop.png'
import JavaScriptImage from '../images/ExpertiseImg/JavaScript.png'

//icons
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';


function Expertise() {
  return (
    <div className="expertise">
      <div className="expertiseContent">
        <h1 className="expertiseTitle">EXPERTISE</h1>
        <p className="expertiseContentWords">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere mattis leo imperdiet suscipit. 
          Vivamus felis odio, facilisis in augue sed, rutrum sodales metus. Interdum et malesuada fames ac ante 
          ipsum primis in faucibus. Curabitur in volutpat dolor. Aenean lobortis enim nec maximus tempus. Praesent 
          id purus eget ex gravida consequat molestie venenatis sapien. Integer tortor sem, auctor vel interdum at, 
          commodo ut nibh. Donec ut tristique dui. In posuere orci massa, ac efficitur nibh rutrum sed. In egestas, 
          mauris maximus efficitur aliquet, nisl velit commodo sapien, elementum cursus neque est id neque. 
          Vivamus sodales risus non quam euismod fermentum. Donec sagittis aliquam tincidunt. Pellentesque 
          eget libero euismod lorem hendrerit sodales posuere in enim. Nulla non velit vitae sem volutpat imperdiet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere mattis leo imperdiet suscipit. 
          Vivamus felis odio, facilisis in augue sed, rutrum sodales metus. Interdum et malesuada fames ac ante 
          ipsum primis in faucibus. Curabitur in volutpat dolor. Aenean lobortis enim nec maximus tempus. Praesent 
          id purus eget ex gravida consequat molestie venenatis sapien. Integer tortor sem, auctor vel interdum at, 
          commodo ut nibh. Donec ut tristique dui. In posuere orci massa, ac efficitur nibh rutrum sed. In egestas, 
          mauris maximus efficitur aliquet, nisl velit commodo sapien, elementum cursus neque est id neque. 
          Vivamus sodales risus non quam euismod fermentum. Donec sagittis aliquam tincidunt. Pellentesque 
          eget libero euismod lorem hendrerit sodales posuere in enim. Nulla non velit vitae sem volutpat imperdiet
        </p>
        <div className="expertiseCirlceContent">
          <div className="expertiseCirlce">
            <h3 className="expertiseCirlceNumber">1</h3>
            <h3 className="expertiseCirlceWords">Concept</h3>
          </div>
          <div className="expertiseSmallCirlce"><ChevronRightSharpIcon style={{fontSize: '4rem'}}/></div>
          <div className="expertiseCirlce">
            <h3 className="expertiseCirlceNumber">2</h3>
            <h3 className="expertiseCirlceWords">Design</h3>
          </div>
          <div className="expertiseSmallCirlce"><ChevronRightSharpIcon style={{fontSize: '4rem'}}/></div>
          <div className="expertiseCirlce">
            <h3 className="expertiseCirlceNumber">3</h3>
            <h3 className="expertiseCirlceWords">Code</h3>
          </div>
          <div className="expertiseSmallCirlce"><ChevronRightSharpIcon style={{fontSize: '4rem'}}/></div>
          <div className="expertiseCirlce">
            <h3 className="expertiseCirlceNumber">4</h3>
            <h3 className="expertiseCirlceWords">Launch</h3>
          </div>
        </div>
        <div className="expertiseSkills">
          <h1>Skills</h1>
          <div className="expertiseSkillsBoxContent">
            <div className="expertiseSkillsBox"><img src={photoShopImage} alt="photoShopImage" style={{ width: '5vh', height: 'auto' }}/></div>
            <div className="expertiseSkillsBox"><img src={JavaScriptImage} alt="JavaScriptImage" style={{ width: '5vh', height: 'auto' }}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Expertise);
