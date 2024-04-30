"use client";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import { useCollection } from "@cloudscape-design/collection-hooks";
import {
  Button,
  Container,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
  Table,
} from "@cloudscape-design/components";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

interface Item {
  id: string;
  name: string;
  cost: number;
  damage: number;
}

export default function CostBenefitAnalysis() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [damage, setDamage] = useState(0);
  const [allItems, setAllItems] = useLocalStorageState<Item[]>(
    "calculators.cost-benefit-analysis.items",
    [],
  );
  const { items, actions, collectionProps } = useCollection(allItems, {
    sorting: {
      defaultState: {
        sortingColumn: {
          sortingField: "ratio",
        },
        isDescending: false,
      },
    },
    selection: {
      trackBy: ({ id }) => id,
    },
    filtering: {
      empty: "No items",
    },
  });
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAllItems((items) => [...items, { id: uuid(), name, cost, damage }]);
    setName("");
    setCost(0);
    setDamage(0);
    nameInputRef.current?.focus();
  };

  return (
    <SpaceBetween size="l">
      <form onSubmit={handleFormSubmit}>
        <Form
          header={
            <Header
              variant="h1"
              description="Whether something is worth the upgrade"
            >
              Cost benefit analysis
            </Header>
          }
          actions={
            <SpaceBetween size="xs">
              <Button variant="primary" disabled={!name || !cost || !damage}>
                Calculate
              </Button>
            </SpaceBetween>
          }
        >
          <Breadcrumb
            text="Cost benefit analysis"
            href="/calculators/cost-benefit-analysis"
          />
          <Container>
            <SpaceBetween size="l">
              <FormField label="Item/Skill name">
                <Input
                  ref={nameInputRef}
                  value={name}
                  onChange={(e) => setName(e.detail.value)}
                />
              </FormField>
              <FormField label="Cost">
                <Input
                  type="number"
                  value={String(cost)}
                  onChange={(e) => setCost(Number(e.detail.value))}
                />
              </FormField>
              <FormField label="Increase in damage (%)">
                <Input
                  type="number"
                  value={String(damage)}
                  onChange={(e) => setDamage(Number(e.detail.value))}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
      <Table
        variant="container"
        header={
          <Header
            variant="h2"
            actions={
              <SpaceBetween size="xs">
                <Button
                  disabled={collectionProps.selectedItems?.length === 0}
                  onClick={() => {
                    setAllItems((prev) =>
                      prev.filter(
                        (item) =>
                          !collectionProps.selectedItems?.includes(item),
                      ),
                    );
                    actions.setSelectedItems([]);
                  }}
                >
                  Delete{" "}
                  {collectionProps.selectedItems
                    ? collectionProps.selectedItems.length > 1
                      ? `${collectionProps.selectedItems.length} items`
                      : "item"
                    : "item"}
                </Button>
              </SpaceBetween>
            }
          >
            Results
          </Header>
        }
        selectionType="multi"
        columnDefinitions={[
          {
            header: "Item/Skill name",
            cell: ({ name }) => name,
            sortingField: "name",
          },
          { header: "Cost", cell: ({ cost }) => cost, sortingField: "cost" },
          {
            header: "Damage (%)",
            cell: ({ damage }) => damage,
            sortingField: "damage",
          },
          {
            header: "Cost per damage %",
            cell: ({ cost, damage }) => cost / damage,
            sortingField: "ratio",
            sortingComparator: (a, b) => {
              const aRatio = a.cost / a.damage;
              const bRatio = b.cost / b.damage;
              return aRatio - bRatio;
            },
          },
        ]}
        empty={"No items"}
        items={items}
        {...collectionProps}
      />
    </SpaceBetween>
  );
}
