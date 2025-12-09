import { availableServices, existingConnections } from "../data/mockIntegrations";

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

const mockApi = {
  async getAvailableServices() {
    await delay();
    return availableServices;
  },

  async getConnections() {
    await delay();
    return existingConnections;
  }
};

export default mockApi;
