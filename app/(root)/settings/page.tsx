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

function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 flex-row flex-start">
      <h2 className=" font-semibold mb-2 text-green-800 py-1 pl-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
