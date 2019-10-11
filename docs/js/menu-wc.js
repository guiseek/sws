'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">SWS - Global documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountFeatureAuthModule.html" data-type="entity-link">AccountFeatureAuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountFeatureAuthModule-e0c4280e3a99d5dfed1161f88affd30b"' : 'data-target="#xs-components-links-module-AccountFeatureAuthModule-e0c4280e3a99d5dfed1161f88affd30b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountFeatureAuthModule-e0c4280e3a99d5dfed1161f88affd30b"' :
                                            'id="xs-components-links-module-AccountFeatureAuthModule-e0c4280e3a99d5dfed1161f88affd30b"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountFeatureOnboardingModule.html" data-type="entity-link">AccountFeatureOnboardingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountFeatureOnboardingModule-1a5a79774d079d3cb81fc8ab39901e21"' : 'data-target="#xs-components-links-module-AccountFeatureOnboardingModule-1a5a79774d079d3cb81fc8ab39901e21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountFeatureOnboardingModule-1a5a79774d079d3cb81fc8ab39901e21"' :
                                            'id="xs-components-links-module-AccountFeatureOnboardingModule-1a5a79774d079d3cb81fc8ab39901e21"' }>
                                            <li class="link">
                                                <a href="components/OnboardCompanyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OnboardCompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OnboardUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OnboardUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountFeatureShellModule.html" data-type="entity-link">AccountFeatureShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountFeatureShellModule-a2398a2ef35e4127932c64eb76a28c39"' : 'data-target="#xs-components-links-module-AccountFeatureShellModule-a2398a2ef35e4127932c64eb76a28c39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountFeatureShellModule-a2398a2ef35e4127932c64eb76a28c39"' :
                                            'id="xs-components-links-module-AccountFeatureShellModule-a2398a2ef35e4127932c64eb76a28c39"' }>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountSharedAuthModule.html" data-type="entity-link">AccountSharedAuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' : 'data-target="#xs-components-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' :
                                            'id="xs-components-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' : 'data-target="#xs-injectables-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' :
                                        'id="xs-injectables-links-module-AccountSharedAuthModule-80d208d1d661dfe47d92b942624b6f04"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountSharedUserModule.html" data-type="entity-link">AccountSharedUserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' : 'data-target="#xs-components-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' :
                                            'id="xs-components-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' }>
                                            <li class="link">
                                                <a href="components/ToolbarMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' : 'data-target="#xs-injectables-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' :
                                        'id="xs-injectables-links-module-AccountSharedUserModule-285800d18759b1e47f0f1ad4d1e3af10"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' : 'data-target="#xs-controllers-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' :
                                            'id="xs-controllers-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' : 'data-target="#xs-injectables-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' :
                                        'id="xs-injectables-links-module-AppModule-fc7ac63902ae87adb95d4fff27455c51"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-36abc2709d8b6fd31d48870542e75036-1"' : 'data-target="#xs-components-links-module-AppModule-36abc2709d8b6fd31d48870542e75036-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-36abc2709d8b6fd31d48870542e75036-1"' :
                                            'id="xs-components-links-module-AppModule-36abc2709d8b6fd31d48870542e75036-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link">AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-142d4c17c370b5b55f28f2b830db2496"' : 'data-target="#xs-components-links-module-AppServerModule-142d4c17c370b5b55f28f2b830db2496"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-142d4c17c370b5b55f28f2b830db2496"' :
                                            'id="xs-components-links-module-AppServerModule-142d4c17c370b5b55f28f2b830db2496"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' : 'data-target="#xs-controllers-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' :
                                            'id="xs-controllers-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' : 'data-target="#xs-injectables-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' :
                                        'id="xs-injectables-links-module-AuthModule-def55fc64d6e1f247e0ed30a8e78ccaf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link">CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' : 'data-target="#xs-controllers-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' :
                                            'id="xs-controllers-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' : 'data-target="#xs-injectables-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' :
                                        'id="xs-injectables-links-module-CompaniesModule-b714f24f054b7c015b3049612c7a99ce"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyShellModule.html" data-type="entity-link">CompanyShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompanyShellModule-c4164b0574d7ca96056b4f7a5c31faa1"' : 'data-target="#xs-components-links-module-CompanyShellModule-c4164b0574d7ca96056b4f7a5c31faa1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompanyShellModule-c4164b0574d7ca96056b4f7a5c31faa1"' :
                                            'id="xs-components-links-module-CompanyShellModule-c4164b0574d7ca96056b4f7a5c31faa1"' }>
                                            <li class="link">
                                                <a href="components/CompanyProjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanyProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanySettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanySettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanyShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanyShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrganizationFeatureShellModule.html" data-type="entity-link">OrganizationFeatureShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrganizationFeatureShellModule-9e0ed7165f419df121effbb8bd083a9e"' : 'data-target="#xs-components-links-module-OrganizationFeatureShellModule-9e0ed7165f419df121effbb8bd083a9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrganizationFeatureShellModule-9e0ed7165f419df121effbb8bd083a9e"' :
                                            'id="xs-components-links-module-OrganizationFeatureShellModule-9e0ed7165f419df121effbb8bd083a9e"' }>
                                            <li class="link">
                                                <a href="components/CompaniesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompaniesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrganizationSharedCompanyModule.html" data-type="entity-link">OrganizationSharedCompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' : 'data-target="#xs-components-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' :
                                            'id="xs-components-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' }>
                                            <li class="link">
                                                <a href="components/CreateCompanyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateCompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateProjectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateProjectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' : 'data-target="#xs-injectables-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' :
                                        'id="xs-injectables-links-module-OrganizationSharedCompanyModule-4e325c80ae9877268c3ec7679ca3f588"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyDataSource.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CompanyDataSource</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CompanyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectDataSource.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProjectDataSource</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProjectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsModule.html" data-type="entity-link">ProjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' : 'data-target="#xs-controllers-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' :
                                            'id="xs-controllers-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' }>
                                            <li class="link">
                                                <a href="controllers/ProjectsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' : 'data-target="#xs-injectables-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' :
                                        'id="xs-injectables-links-module-ProjectsModule-aa9e8cb223fdd7da10fafbb3024644d5"' }>
                                        <li class="link">
                                            <a href="injectables/ProjectsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProjectsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiKitFloatingDialogModule.html" data-type="entity-link">UiKitFloatingDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' : 'data-target="#xs-components-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' :
                                            'id="xs-components-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' }>
                                            <li class="link">
                                                <a href="components/DialogContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' : 'data-target="#xs-directives-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' :
                                        'id="xs-directives-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' }>
                                        <li class="link">
                                            <a href="directives/DialogCloseDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogCloseDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' : 'data-target="#xs-injectables-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' :
                                        'id="xs-injectables-links-module-UiKitFloatingDialogModule-0799318ff983854dc4656eb481ca195e"' }>
                                        <li class="link">
                                            <a href="injectables/DialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiKitFormBuilderModule.html" data-type="entity-link">UiKitFormBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' : 'data-target="#xs-components-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' :
                                            'id="xs-components-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' }>
                                            <li class="link">
                                                <a href="components/AsyncSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AsyncSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormBuilderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadiobuttonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadiobuttonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextareaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextareaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' : 'data-target="#xs-directives-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' :
                                        'id="xs-directives-links-module-UiKitFormBuilderModule-1c3ae4b5e1ba54aca47c84ef7f75ce94"' }>
                                        <li class="link">
                                            <a href="directives/FieldBuilderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldBuilderDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiKitFormErrorModule.html" data-type="entity-link">UiKitFormErrorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UiKitFormErrorModule-941e47fa5f7351700b8ae83737c5d216"' : 'data-target="#xs-directives-links-module-UiKitFormErrorModule-941e47fa5f7351700b8ae83737c5d216"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UiKitFormErrorModule-941e47fa5f7351700b8ae83737c5d216"' :
                                        'id="xs-directives-links-module-UiKitFormErrorModule-941e47fa5f7351700b8ae83737c5d216"' }>
                                        <li class="link">
                                            <a href="directives/FormErrorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormErrorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiKitNavToolbarModule.html" data-type="entity-link">UiKitNavToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiKitNavToolbarModule-026df94eabb0bb3c1a4bfd7788e78d4a"' : 'data-target="#xs-components-links-module-UiKitNavToolbarModule-026df94eabb0bb3c1a4bfd7788e78d4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiKitNavToolbarModule-026df94eabb0bb3c1a4bfd7788e78d4a"' :
                                            'id="xs-components-links-module-UiKitNavToolbarModule-026df94eabb0bb3c1a4bfd7788e78d4a"' }>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiKitSvgViewerModule.html" data-type="entity-link">UiKitSvgViewerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' : 'data-target="#xs-components-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' :
                                            'id="xs-components-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' }>
                                            <li class="link">
                                                <a href="components/SvgViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SvgViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' : 'data-target="#xs-injectables-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' :
                                        'id="xs-injectables-links-module-UiKitSvgViewerModule-c74fe46fbf293553938f3bdb416f4a81"' }>
                                        <li class="link">
                                            <a href="injectables/SvgViewerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SvgViewerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' : 'data-target="#xs-controllers-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' :
                                            'id="xs-controllers-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' : 'data-target="#xs-injectables-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' :
                                        'id="xs-injectables-links-module-UsersModule-7233f39c01d2e3cea76375b28126d2bd"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ShellComponent-1.html" data-type="entity-link">ShellComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShellComponent-2.html" data-type="entity-link">ShellComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link">BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link">ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link">Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompanySchema.html" data-type="entity-link">CompanySchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogRef.html" data-type="entity-link">DialogRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElementBase.html" data-type="entity-link">ElementBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link">HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpService.html" data-type="entity-link">HttpService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IceCreamComponent.html" data-type="entity-link">IceCreamComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link">LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Name.html" data-type="entity-link">Name</a>
                            </li>
                            <li class="link">
                                <a href="classes/Project.html" data-type="entity-link">Project</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProjectSchema.html" data-type="entity-link">ProjectSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/SvgViewerConfig.html" data-type="entity-link">SvgViewerConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SvgViewerDefaultConfig.html" data-type="entity-link">SvgViewerDefaultConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfile.html" data-type="entity-link">UserProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProject.html" data-type="entity-link">UserProject</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CompanyResolverService.html" data-type="entity-link">CompanyResolverService</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserCompanyGuard.html" data-type="entity-link">UserCompanyGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserResolverService.html" data-type="entity-link">UserResolverService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogConfig.html" data-type="entity-link">DialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogHeader.html" data-type="entity-link">DialogHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormElement.html" data-type="entity-link">FormElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormValidator.html" data-type="entity-link">FormValidator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICompany.html" data-type="entity-link">ICompany</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IElement.html" data-type="entity-link">IElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IElementSchema.html" data-type="entity-link">IElementSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJwtConfig.html" data-type="entity-link">IJwtConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJwtPayload.html" data-type="entity-link">IJwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageFileCompressed.html" data-type="entity-link">ImageFileCompressed</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IName.html" data-type="entity-link">IName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProject.html" data-type="entity-link">IProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link">IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserProfile.html" data-type="entity-link">IUserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserProject.html" data-type="entity-link">IUserProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Position.html" data-type="entity-link">Position</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});