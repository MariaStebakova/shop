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