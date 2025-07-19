type Constructor<T = {}> = new (...args: any[]) => T;

////////////////////
// Example mixins
////////////////////

// A mixin that adds a property
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

class User {
  name: string = 'Sofia';
}

const TimestampedUser = Timestamped(User);

const timestampedUser = new TimestampedUser();
console.log(timestampedUser.name); // Sofia
