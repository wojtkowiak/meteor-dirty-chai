# Meteor dirty-chai

Loads the dirty-chai chai plugin. This package should be used with https://github.com/practicalmeteor/chai or https://github.com/practicalmeteor/mocha.

## Installation

    meteor add omega:dirty-chai
    
## Usage

In your `package.js` inside `Package.onTest` just add:
```javascript
api.use('practicalmeteor:mocha');
api.use('omega:dirty-chai');
```
or
```javascript
api.use('practicalmeteor:chai');
api.use('omega:dirty-chai');
```
