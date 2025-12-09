import IntegrationCard from "./IntegrationCard";
import { availableServices } from "../../data/mockIntegrations";

export default function IntegrationGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {availableServices.map((svc) => (
        <IntegrationCard key={svc.id} service={svc} />
      ))}
    </div>
  );
}
