import { User } from './models/User';
import { UserList } from './views/UserList';

const element = document.getElementById('root');
if (element) {
    const userCollection = User.buildUserCollection();
    const collectionView = new UserList(element, userCollection);
    userCollection.fetch();
} else {
    throw Error('Root element not found');
}
