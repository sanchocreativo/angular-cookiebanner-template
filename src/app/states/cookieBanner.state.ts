import {State, Action, StateContext, Selector} from '@ngxs/store';
import { ResponseModel} from '../models/CookieBanner';
import { GetCookieBanner } from '../actions/cookieBanner.action';
import {CookieBannerService} from '../cookieBanner.service';
import {tap,} from 'rxjs/operators';

export class CookieBannerStateModel {
    accordian: ResponseModel[];
    areCookiesLoaded: boolean;
}

@State<CookieBannerStateModel>({
    name: 'accordian',
    defaults: {
        accordian: [],
        areCookiesLoaded: false
    }
})
export class CookieBannerState {

    constructor(private cookieBannerService: CookieBannerService) {
    }

    @Selector()
    static getCookieBannerList(state: ResponseModel) {
        return state.accordian;
    }

    @Selector()
    static areCookiesLoaded(state: CookieBannerStateModel ) {
        return state.areCookiesLoaded;
    }

    @Action(GetCookieBanner)
    getCookies({getState, setState}: StateContext<CookieBannerStateModel>) {
        return this.cookieBannerService.fetchCookieApi().pipe(tap((result) => {
            
            const state = getState();
            
            setState({
                ...state,
                accordian: result['accordian'],
                areCookiesLoaded: true
            });
        }));
    }

}

