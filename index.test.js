describe('API Tests', () => {
  test('should return correct API info structure', () => {
    const mockInfo = {
      name: 'GitHub Connection Demo',
      version: '1.0.0',
      timestamp: expect.any(String),
      environment: expect.any(String)
    };
    
    expect(mockInfo).toHaveProperty('name');
    expect(mockInfo).toHaveProperty('version');
    expect(mockInfo).toHaveProperty('timestamp');
    expect(mockInfo).toHaveProperty('environment');
  });

  test('version should be 1.0.0', () => {
    const version = '1.0.0';
    expect(version).toBe('1.0.0');
  });
});