import React, {useState} from 'react'
import { HeroBg, HeroContainer, BtnWrap, HeroContent, HeroH1, HeroP, HeroP2, HeroBtnWrapper} from './TerpenesElements'
import CustomizedTreeView from './treeview'

import MaxWidthDialog from './fullscreen'
import { makeStyles } from '@material-ui/core/styles';
import Cannabinoids from './cannabinoids';
import Flavanoids from './flavanoids'
import Setting from './setting';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Entourage from './entourage'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const TerpenesSection = () => {
    
    const [hover, setHover] = useState(false)
    const onHover = () =>
        setHover(!hover)
    return (
        <HeroContainer id = "science">
            <HeroContent>
            <HeroH1>What Science Knows</HeroH1>
            <HeroP>About Your High</HeroP>
            <ArrowDownwardIcon className = "arrow" />
            <Entourage/>
            <MaxWidthDialog  />
            <Cannabinoids/>
            <Flavanoids/>
            <Setting/>
            </HeroContent>
            {/* <CustomizedTreeView></CustomizedTreeView> */}
            
        </HeroContainer>
    )
}

export default TerpenesSection
