
import defaultColorScheme from './defaultUsingTheme/defaultColorScheme'

console.log(defaultColorScheme);

 const defaultUsingTheme = {
    
  _id: "default"
  , author: ""
  
  , title: "default"
  
  
  , colorScheme: defaultColorScheme
  
  
  , media: {
    
    xs_sm: 576,
    sm_md: 768,
    md_lg: 992,
    lg_xl: 1200
  }
  
  
  //, listUserGood: { type: [String], default: [] }
  //, listUserBad: { type: [String], default: [] }
  
  , created: Date.now()
  , updated: Date.now()
}



export default defaultUsingTheme;