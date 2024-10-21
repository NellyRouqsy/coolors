import AppleIcon from '../../../assets/apple-black-logo.svg'
import AndroidIcon from '../../../assets/android-logo-svgrepo-com.svg'
import FigmaIcon from '../../../assets/figma-svgrepo-com.svg'
import ChromeIcon from '../../../assets/chrome-svgrepo-com.svg'
import AdobeIcon from '../../../assets/adobe-svgrepo-com.svg'
import Props from './Props.jsx'
import './Appli.css'

const Appli = () => {
  return (
    <div className={'AppContainer'}>
      <Props Image={AppleIcon} Title="ios App" Text="Create browse and save palettes on the go." Hidden="View on the App Store" Styles="style1"/>
      <Props Image={AndroidIcon} Title="Android App" Text="Thousands of palettes in your pocket" Hidden="View on the play Store" Styles="style2"/>
      <Props Image={FigmaIcon} Title="Figma Plugin" Text="All palettes right in your workspace." Hidden="Install now" Styles="style3"/>
      <Props Image={ChromeIcon} Title="Chrome Extention" Text="Go and edit a palettes every new tab." Hidden="Add to Chrome" Styles="style4"/>
      <Props Image={AdobeIcon} Title="Adobe Extention" Text="Use Coolors with your favorite tools." Hidden="Download" Styles="style5"/>
      <p className='new'>NEW</p>
    </div>
  );
};

export default Appli;

