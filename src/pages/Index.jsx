import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [supplier, setSupplier] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [deviceType, setDeviceType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!supplier || !numberOfItems || !deviceType) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Stock information submitted successfully!");
    // Here you can handle the form submission, e.g., send the data to a server or update the state
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Stock Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="supplier">Supplier</Label>
              <Input
                id="supplier"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                placeholder="Enter supplier name"
              />
            </div>
            <div>
              <Label htmlFor="numberOfItems">Number of Items</Label>
              <Input
                id="numberOfItems"
                type="number"
                value={numberOfItems}
                onChange={(e) => setNumberOfItems(e.target.value)}
                placeholder="Enter number of items"
              />
            </div>
            <div>
              <Label htmlFor="deviceType">Device Type</Label>
              <Select onValueChange={setDeviceType}>
                <SelectTrigger id="deviceType" className="w-full">
                  <SelectValue placeholder="Select device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="tablet">Tablet</SelectItem>
                  <SelectItem value="smartphone">Smartphone</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;