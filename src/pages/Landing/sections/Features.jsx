import FeatureCard from "../../../components/ui/FeatureCard";
import "./Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="container features-grid">
        <FeatureCard title="Captura" text="Landing pages + Chat + Instagram + WhatsApp" />
        <FeatureCard title="Nutrição" text="Fluxos de e-mail/WhatsApp com IA" />
        <FeatureCard title="Conversão" text="Qualificação automática + CRM integrado" />
        <FeatureCard title="Retenção" text="Follow-up e campanhas recorrentes" />
      </div>
    </section>
  );
}
