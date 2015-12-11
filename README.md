# Meteor dirty-chai

Loads the [dirty-chai](https://www.npmjs.com/package/dirty-chai) chai plugin. This package should be used with [practicalmeteor:chai](https://github.com/practicalmeteor/meteor-chai) or [practicalmeteor:mocha](https://github.com/practicalmeteor/mocha).

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
