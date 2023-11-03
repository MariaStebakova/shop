import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service"
import { LocalStorageService } from "./local-storage.service";

describe('AuthService', () => {
    let service: AuthService;
    let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('LocalStorageService', ['getItem', 'setItem']);
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                { provide: LocalStorageService, useValue: spy }
            ]
        });

        service = TestBed.inject(AuthService);
        localStorageServiceSpy = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    });

    it('login() should set isLoggedIn and isAdmin and persist login', (done: DoneFn) => {
        const role = 'admin';
        service.login(role).subscribe(isLoggedIn => {
            expect(service.isLoggedIn).toBe(isLoggedIn);
            expect(service.isAdmin).toBeTrue();
            expect(localStorageServiceSpy.setItem).toHaveBeenCalledTimes(2);
            done();
        })
    });

    it('logout() should set isLoggedIn and isAdmin to false', () => {
        service.logout();
        expect(service.isLoggedIn).toBeFalse();
        expect(service.isAdmin).toBeFalse();
    })
})