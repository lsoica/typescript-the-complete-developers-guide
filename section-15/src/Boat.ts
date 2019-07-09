@classDecorator
class Boat {
    color: string = 'red';

    getFormattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @logError('Something bad!')
    pilot(@parameterDecorator speed: string) {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}

function logError(message: string) {
    return function(target: any, key: any, desc: PropertyDescriptor) {
        console.log('Target: ', target);
        console.log('Key: ', key);
        const method = desc.value;
        desc.value = function() {
            try {
                method();
            } catch (e) {
                console.log(message);
            }
        };
    };
}

function parameterDecorator(target: any, key: any, index: number) {
    console.log(key, index);
}

function classDecorator(constructor: Function) {
    console.log(constructor);
}

new Boat().pilot('aa');
