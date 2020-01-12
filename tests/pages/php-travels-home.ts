import { BasePage } from './base';

export class SpecificCookiePage extends BasePage {
  constructor() {
    super('/');
  }

  get myAccountDropdown(){
      return $('div class="dropdown dropdown-login dropdown-tab show"')
  }

  get signUpLink(){
      return $('a href="https://www.phptravels.net/register"')
  }
  
}