import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props){
    super(props);
    this.language = {language: 'french'}
  }
  render(){
    return (
      <LanguageContext.Provider
        value={{this.state.language}}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}