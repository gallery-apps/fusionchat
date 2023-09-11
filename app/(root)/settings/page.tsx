import React from "react";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8">
      <SettingsSection title="Account Information">
        {/* Content for Account Information section */}
      </SettingsSection>

      <SettingsSection title="General Settings">
        {/* Content for General Settings section */}
      </SettingsSection>

      <SettingsSection title="Privacy">
        {/* Content for Privacy section */}
      </SettingsSection>

      <SettingsSection title="Notifications">
        {/* Content for Notifications section */}
      </SettingsSection>

      <SettingsSection title="Help">
        {/* Content for Help section */}
      </SettingsSection>
    </div>
  );
}

function SettingsSection({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}
