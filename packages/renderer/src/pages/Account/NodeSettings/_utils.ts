import type { MoneroNodeSettings } from "haveno-ts";
import type { NodeLocalFormValues } from "./_hooks";

/**
 * Transformes the settings request values to form.
 * @param    {MoneroNodeSettings.AsObject} nodeSettings
 * @returns  {NodeLocalFormValues}
 */
export function transformSettingsRequestToForm(
  nodeSettings: MoneroNodeSettings.AsObject
): NodeLocalFormValues {
  return {
    blockchainLocation: nodeSettings?.blockchainPath || "",
    startupFlags: nodeSettings?.startupFlagsList.join(", ") || "",
    deamonAddress: transfromBootstrapUrl(nodeSettings?.bootstrapUrl || ""),
    port: transformPort(nodeSettings?.bootstrapUrl || ""),
  };
}

function transformPort(urlAsString: string) {
  try {
    const url = new URL(urlAsString);
    return url.port;
  } catch {
    return "";
  }
}

function transfromBootstrapUrl(urlAsString: string) {
  try {
    const url = new URL(urlAsString);

    // Remove the port from url.
    url.port = "";
    return url.href;
  } catch {
    return "";
  }
}
