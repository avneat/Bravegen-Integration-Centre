import { useState, useEffect } from "react";
import mockApi from "../services/mockApi";

export const useIntegrations = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    mockApi.getConnections().then(setConnections);
  }, []);

  const updateConnection = (id, updated) => {
    setConnections(old =>
      old.map(item => item.id === id ? { ...item, ...updated } : item)
    );
  };

  const deleteConnection = (id) => {
    setConnections(old =>
      old.filter(item => item.id !== id)
    );
  };

  return {
    connections,
    updateConnection,
    deleteConnection
  };
};
