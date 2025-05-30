"use client";

import React, { useState } from "react";

const OSResourcesDiagram = () => {
  type ResourceKey = "memory" | "peripherals" | "processing";
  const [selectedResource, setSelectedResource] =
    useState<ResourceKey>("memory");

  // Resources from my class notes
  const resources: Record<
    ResourceKey,
    {
      title: string;
      color: string;
      icon: string;
      description: string;
      examples: string[];
      management: string[];
    }
  > = {
    memory: {
      title: "Storage Space",
      color: "#4CAF50",
      icon: "💾",
      description: "All the places where we keep information",
      examples: [
        "Flash memory (where programs live)",
        "RAM (temporary stuff)",
        "Variables in my code",
        "Arrays and data",
        "Stack for each job",
      ],
      management: [
        "Give each job its own space",
        "Make sure jobs don't mess with each other's data",
        "Clean up unused memory",
        "Prevent stack overflow",
        "Share memory safely",
      ],
    },
    peripherals: {
      title: "Connected Stuff",
      color: "#2196F3",
      icon: "🔌",
      description: "All the extra parts connected to the computer",
      examples: [
        "Sensors (temperature, buttons)",
        "Motors and actuators",
        "WiFi and Bluetooth",
        "LEDs and displays",
        "Speakers and microphones",
      ],
      management: [
        "Only one job uses each device at a time",
        "Handle interrupts from devices",
        "Share devices fairly",
        "Manage device drivers",
        "Coordinate access",
      ],
    },
    processing: {
      title: "Thinking Time",
      color: "#FF9800",
      icon: "⚡",
      description: "CPU time shared between all jobs",
      examples: [
        "Running my code",
        "Handling interrupts",
        "System maintenance",
        "Background tasks",
        "Calculations",
      ],
      management: [
        "Switch between jobs every 1ms",
        "Give important jobs priority",
        "Use round-robin for fair sharing",
        "Save/restore job contexts",
        "Keep CPU busy",
      ],
    },
  };

  type ResourceType = {
    title: string;
    color: string;
    icon: string;
    description: string;
    examples: string[];
    management: string[];
  };

  type ResourceCardProps = {
    resource: ResourceType;
    isSelected: boolean;
    onClick: () => void;
    resourceKey?: string;
  };

  const ResourceCard: React.FC<ResourceCardProps> = ({
    resource,
    isSelected,
    onClick,
  }) => (
    <div
      onClick={onClick}
      style={{
        width: "160px",
        height: "100px",
        backgroundColor: isSelected ? resource.color : "white",
        color: isSelected ? "white" : resource.color,
        border: `3px solid ${resource.color}`,
        borderRadius: "12px",
        padding: "12px",
        margin: "8px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        boxShadow: isSelected
          ? `0 6px 12px ${resource.color}40`
          : "0 3px 6px rgba(0,0,0,0.1)",
        transform: isSelected ? "scale(1.05)" : "scale(1)",
      }}
    >
      <div style={{ fontSize: "28px", marginBottom: "6px" }}>
        {resource.icon}
      </div>
      <div
        style={{
          fontSize: "13px",
          fontWeight: "bold",
          lineHeight: "1.1",
        }}
      >
        {resource.title}
      </div>
    </div>
  );

  type JobExampleProps = {
    jobName: string;
    resources: {
      memory: string;
      peripherals: string;
      processing: string;
    };
    color: string;
  };

  const JobExample: React.FC<JobExampleProps> = ({
    jobName,
    resources,
    color,
  }) => (
    <div
      style={{
        backgroundColor: color + "20",
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "12px",
        margin: "8px 0",
        width: "100%",
      }}
    >
      <h4 style={{ color: color, margin: "0 0 8px 0", fontSize: "14px" }}>
        {jobName}
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "11px",
          gap: "10px",
        }}
      >
        <div style={{ flex: 1 }}>
          <strong>Storage:</strong>
          <br />
          {resources.memory}
        </div>
        <div style={{ flex: 1 }}>
          <strong>Devices:</strong>
          <br />
          {resources.peripherals}
        </div>
        <div style={{ flex: 1 }}>
          <strong>CPU:</strong>
          <br />
          {resources.processing}
        </div>
      </div>
    </div>
  );

  const selectedResourceData = resources[selectedResource];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "650px",
        backgroundColor: "#f8f9fa",
        border: "2px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "8px" }}>
        What the OS Manages (From My Notes)
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "25px",
          fontSize: "14px",
        }}
      >
        Professor said these are the 3 main things every OS has to manage
      </p>

      {/* Resource cards to click */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        {Object.entries(resources).map(([key, resource]) => (
          <ResourceCard
            key={key}
            resourceKey={key}
            resource={resource}
            isSelected={selectedResource === key}
            onClick={() => setSelectedResource(key as ResourceKey)}
          />
        ))}
      </div>

      {/* OS in the middle */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            width: "130px",
            height: "130px",
            backgroundColor: "#333",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
          }}
        >
          🖥️
          <div style={{ marginTop: "8px", fontSize: "14px" }}>Operating</div>
          <div style={{ fontSize: "14px" }}>System</div>
          <div style={{ fontSize: "10px", marginTop: "4px" }}>
            (The Manager)
          </div>
        </div>
      </div>

      {/* Details about selected resource */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        {/* What it is */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "18px",
            borderRadius: "8px",
            border: `2px solid ${selectedResourceData.color}`,
            borderTop: `5px solid ${selectedResourceData.color}`,
          }}
        >
          <h3
            style={{
              color: selectedResourceData.color,
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
            }}
          >
            {selectedResourceData.icon} {selectedResourceData.title}
          </h3>

          <p style={{ color: "#333", marginBottom: "15px", fontSize: "13px" }}>
            {selectedResourceData.description}
          </p>

          <h5 style={{ color: "#666", marginBottom: "8px", fontSize: "13px" }}>
            Examples from class:
          </h5>
          <ul style={{ color: "#555", paddingLeft: "16px", fontSize: "12px" }}>
            {selectedResourceData.examples.map((example, index) => (
              <li key={index} style={{ marginBottom: "3px" }}>
                {example}
              </li>
            ))}
          </ul>
        </div>

        {/* How OS manages it */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "18px",
            borderRadius: "8px",
            border: "2px solid #ddd",
          }}
        >
          <h3 style={{ color: "#333", marginTop: 0, fontSize: "16px" }}>
            How OS Handles This
          </h3>

          <ul style={{ color: "#555", paddingLeft: "16px", fontSize: "12px" }}>
            {selectedResourceData.management.map((strategy, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "6px",
                  padding: "4px 0",
                  borderLeft: `3px solid ${selectedResourceData.color}`,
                  paddingLeft: "8px",
                  marginLeft: "8px",
                }}
              >
                {strategy}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Example from my notes */}
      <div
        style={{
          backgroundColor: "white",
          padding: "18px",
          borderRadius: "8px",
          border: "2px solid #ddd",
        }}
      >
        <h3
          style={{
            color: "#333",
            marginTop: 0,
            marginBottom: "15px",
            fontSize: "16px",
          }}
        >
          Example Jobs from Arduino Project (My Notes)
        </h3>

        <JobExample
          jobName="Job A: Read Temperature"
          color="#e91e63"
          resources={{
            memory: "Temp data array",
            peripherals: "Temp sensor",
            processing: "Every 100ms",
          }}
        />

        <JobExample
          jobName="Job B: Control Fan"
          color="#9c27b0"
          resources={{
            memory: "Speed settings",
            peripherals: "Motor driver",
            processing: "When temp > 25°C",
          }}
        />

        <JobExample
          jobName="Job C: Send to WiFi"
          color="#3f51b5"
          resources={{
            memory: "Message buffer",
            peripherals: "WiFi chip",
            processing: "Every 5 seconds",
          }}
        />

        <div
          style={{
            marginTop: "15px",
            padding: "12px",
            backgroundColor: "#e8f5e8",
            borderRadius: "6px",
            border: "1px solid #4caf50",
          }}
        >
          <h4 style={{ color: "#2e7d32", marginTop: 0, fontSize: "14px" }}>
            What Professor Said:
          </h4>
          <p style={{ color: "#333", margin: 0, fontSize: "12px" }}>
            "The OS makes sure Job A doesn't interfere with Job B's motor, that
            each job gets its own memory space without conflicts, and that all
            jobs get fair CPU time. This way they can all run 'at the same time'
            even though there's only one processor!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default OSResourcesDiagram;
