# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2023-08-03

### Added

- shop project template

## [1.0.1] - 2023-08-06

### Added

- first component
- product component
- product-list component
- product service
- product model
- category enum
- cart-list component
- cart service

## [1.0.2] - 2023-08-22

### Added

- cart-item component
- cart-item model
- modules
- highlight directive
- bootstrap packages


### Changed

- cart service - new methods
- cart list component to use cart-item component
- product model
- product component to use OnPush strategy and adding to cart functionality

## [1.0.3] - 2023-08-29

### Added

- config model
- config-options service
- appInfo injection token
- gen-id generator
- generator factory
- local-storage service
- border style change directive. used in product component


### Changed

- cart-item component's change detection strategy to onPush
- cart service to use BehaviorSubject for cartItems
- cart-list component to get cartItems from Observable via async pipe
- bootstrap version from 5.3.1 to 3.4.1
- bootstrap css styles usage
- first component to use all new services

## [1.0.4] - 2023-09-04

## Added

- orderBy pipe: used in cart-list.component
- ddl and checkbox to select sort option in cart-list.component
- lodash and types/lodash packages

## Changed

- product-list.component to use Observable for products and async pipe for *ngFor
- product.component to use uppercase pipe for product name and currency pipe for price
- cart-item.component to use currency pipe for price

## [1.0.5] - 2023-09-09

## Added

- AppRoutingModule
- ProductsRoutingModule
- CartRoutingModule
- OrdersRoutingModule
- AdminRoutingModule
- AdminModule
- Admin, Admin-Products, Admin-Product-Form, Admin-Orders components
- index.ts files for several levels
- Product-view component
- Login component
- Product page title resolver for dynamic page title formation
- Guards: Auth and IsEmptyCart

## Changed

- angular version upgraded to 16.2.4 for bindToComponentInputs usage
- app component template using router outlet
- imports for files from created index.ts files
- product component's 'buy' button and products info are moved to created product-view component
- cart service to store cart info in local storage

## [1.0.6] - 2023-09-21

## Added
- backend with db in db.json
- concurrently package installed
- products promise service
- cart observable service
- timing interceptor
- app settings service and app-settings.json

## Changed
- cart service to store cart in db via cart observable service instead of local storage
- ability to view products, edit them and add new product for admin
- product-related components to use new products promise service
- sort options storage in local storage or app-settings.json file

## [1.0.7] - 2023-10-22

## Added
- injected @ngrx/store, @ngrx/effects, @ngrx/router-store
- described Products and App states
- products actions
- products reducer
- products feature and state selectors
- products effects
- router actions and effects
- custom serializer for retreiving queryParams from router
- auto-unsubscribe decorator to unsubscibe from subscription on component destroy

## Changed
- components got free of data services and router dependecies
- injected store for product-related components
- added persistance for login state via local storage

## [1.0.8] - 2023-10-27

## Added
- process order form with first, last names, email, phones, delivery and address controls
- custom validator to check start case for first name
- email validator directive to check if email control is 'qwerty@mail.com'
- opportunity to add and remove multiple phones
- centralized validation messages generation for all controls (except phone since there's no control name)

## [1.0.9] - 2023-22-3

## Added
- integration tests for ProductViewComponent
- unit tests for AuthService
- unit tests for OrderByPipe
- code coverage report generation

## Changed
- fixed auto-generated unit tests for AppComponent
- order-by pipe to import only orderBy function from lodash
- startCase validator to use the more correct pattern for a first name