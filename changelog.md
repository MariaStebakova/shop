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
