const { findUser, deleteUser } = require('./users');

// write some tests
describe('users', () => {
  describe('findUser', () => {
    test('find user by id if the user is there', async () => {
      const user = await findUser(1);
      expect(user.id).toBe(1);
    });
  });
  describe('deleteUser', () => {
    test('delete user by id if the user is there return id', async () => {
      const { id } = await deleteUser(1);
      expect(id).toBe(1);
    });
  });
});
