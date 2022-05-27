// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import type { FormEvent } from "react";
import { useState } from "react";
import { Stack, Space, Group } from "@mantine/core";
import { BodyText, Heading } from "@atoms/Typography";
import { Button, TextButton } from "@atoms/Buttons";
import type { AddNodeFormValues } from "@organisms/SelectMoneroNode";
import {
  HAVENO_DAEMON_PASSWORD,
  HAVENO_DAEMON_URL,
} from "@constants/haveno-daemon";
import { useMoneroConnections } from "@hooks/haveno/useMoneroConnections";
import { MoneroNodeListItem, NodeStatus } from "@atoms/MoneroNodeListItem";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { AddNode } from "./AddNode";
import { showNotification } from "@mantine/notifications";
import { useAddMoneroNode } from "@hooks/haveno/useAddMoneroNode";
import { TestNode } from "./TestNode";

interface SelectMoneroNodeProps {
  onGoBack: () => void;
  onNext: ({ url, password }: { url: string; password: string }) => void;
}

export function SelectMoneroNode(props: SelectMoneroNodeProps) {
  const { onGoBack, onNext } = props;
  const { data: connections } = useMoneroConnections();
  const [selectedNode, setSelectedNode] = useState<string>();
  const [isRevealed, setRevealed] = useState(false);
  const [isRevealed2, setRevealed2] = useState(false);
  const { mutate: addMoneroNode } = useAddMoneroNode();

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // TODO: fix
    onNext({
      url: HAVENO_DAEMON_URL,
      password: HAVENO_DAEMON_PASSWORD,
    });
  };

  const handleAddNode = (data: AddNodeFormValues) => {
    const { address, port, user, password } = data;
    addMoneroNode(
      {
        address,
        port,
        user,
        password,
      },
      {
        onError: (err) => {
          showNotification({
            color: "red",
            message: err.message,
            title: "Something went wrong",
          });
        },
        onSuccess: () => {
          setRevealed2(true);
          showNotification({
            color: "green",
            message: "Saved",
          });
        },
      }
    );
  };
  const setChange = () => {
    setRevealed(false);
  };
  const setTest = () => {
    setRevealed2(false);
  };
  return (
    <Stack>
      {isRevealed ? (
        <Stack>
          {isRevealed2 ? (
            <TestNode setTest={setTest} onSubmit={handleAddNode} />
          ) : (
            <AddNode onSubmit={handleAddNode} setChange={setChange} />
          )}
        </Stack>
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack>
            <Heading order={1}>Select a node</Heading>
            <BodyText size="lg">
              We found a local node running on your machine, it’s recommended to
              use this one. Alternatively you can select one of the curated
              nodes below add another node.
            </BodyText>
            <Space h="lg" />
            <Space h="lg" />
            {connections?.map((conn) => (
              <MoneroNodeListItem
                key={conn.url}
                title={conn.url}
                status={
                  conn.onlineStatus === 1
                    ? NodeStatus.Active
                    : NodeStatus.Inactive
                }
                isSelected={conn.url === selectedNode}
                onClick={() => setSelectedNode(conn.url)}
              />
            ))}
            <Group position="apart" mt="sm">
              <TextButton onClick={() => setRevealed(true)}>
                <FormattedMessage
                  id={LangKeys.AccountSettingsAddNode}
                  defaultMessage="Add a new node"
                />
              </TextButton>
            </Group>
            <Space h="lg" />
            <Group position="apart">
              <TextButton onClick={onGoBack}>Go Back</TextButton>
              <Button type="submit" disabled={!selectedNode}>
                Next
              </Button>
            </Group>
          </Stack>
        </form>
      )}
    </Stack>
  );
}
