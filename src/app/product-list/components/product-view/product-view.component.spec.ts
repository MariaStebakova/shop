import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductViewComponent } from "./product-view.component"
import { Store } from "@ngrx/store";
import { CartService } from "src/app/cart-list";
import { Category, ProductModel } from "src/app/shared";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";

describe('ProductViewComponent', () => {
    let component: ProductViewComponent;
    let fixture: ComponentFixture<ProductViewComponent>;
    const storeStub = {
        select: () => of(product),
        dispatch: () => { }
    };
    const cartServiceSpy = jasmine.createSpyObj('CartService', ['addProduct']);
    const product: ProductModel = {
        id: 1,
        name: 'Product',
        description: 'Test Product',
        price: 5,
        category: Category.Animals,
        isAvailable: true
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductViewComponent],
            providers: [
                { provide: Store, useValue: storeStub },
                { provide: CartService, useValue: cartServiceSpy }
            ]
        });
        fixture = TestBed.createComponent(ProductViewComponent);
        component = fixture.componentInstance;
        component.product = product;
        fixture.detectChanges();
    });

    it('should create', () => {
        // Assert
        expect(component).toBeTruthy();
    });

    it('should display product name in uppercase', () => {
        // Arrange
        const productTitleText = fixture.debugElement.query(By.css('.panel-heading')).nativeElement.textContent;
        // Assert
        expect(productTitleText).toBe(product.name?.toUpperCase());
    });

    it('should display price with currency symbol', () => {
        // Arrange
        const expectedPriceText = 'Price: $5.00';
        const liElements = fixture.debugElement.queryAll(By.css('li'));
        const priceText = liElements[1].nativeElement.textContent;
        // Assert
        expect(priceText).toBe(expectedPriceText);
    });

    it('should display "Not available" and disable Buy button if product is not available', () => {
        // Arrange
        component.product.isAvailable = false;
        // Act
        fixture.detectChanges();
        // Assert
        const liElements = fixture.debugElement.queryAll(By.css('li'));
        const availableText = liElements[3].nativeElement.textContent;
        const buyButton = fixture.debugElement.query(By.css('button.btn-primary'));
        expect(availableText)
            .withContext('Available text is "Not available"')
            .toBe('Not available');
        expect(buyButton.nativeElement.disabled)
            .withContext('Buy button is disabled')
            .toBeTrue();
    });

    it('should call addProduct on Buy button click if product is available', () => {
        // Arrange
        component.product.isAvailable = true;
        fixture.detectChanges();
        const addProductSpy = cartServiceSpy.addProduct.and.returnValue(of({}));
        const buyButton = fixture.debugElement.query(By.css('button.btn-primary'));
        // Act
        buyButton.triggerEventHandler('click');
        // Assert
        expect(addProductSpy).toHaveBeenCalled();
    })
})