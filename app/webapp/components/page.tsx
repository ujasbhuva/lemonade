"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ComponentsPage() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Components</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 rounded-full p-1 h-fit mb-4">
            <TabsTrigger value="buttons" className="rounded-full py-2">
              Buttons
            </TabsTrigger>
            <TabsTrigger value="cards" className="rounded-full py-2">
              Cards
            </TabsTrigger>
            <TabsTrigger value="inputs" className="rounded-full py-2">
              Inputs
            </TabsTrigger>
            <TabsTrigger value="dropdowns" className="rounded-full py-2">
              Dropdowns
            </TabsTrigger>
            <TabsTrigger value="dialogs" className="rounded-full py-2">
              Dialogs
            </TabsTrigger>
            <TabsTrigger value="tables" className="rounded-full py-2">
              Tables
            </TabsTrigger>
            <TabsTrigger value="misc" className="rounded-full py-2">
              Misc
            </TabsTrigger>
          </TabsList>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="rounded-3xl">
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="font-light">Button Variants</CardTitle>
                  <CardDescription>Different button styles for different purposes.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 px-6 py-4">
                  <Button variant="default" className="rounded-full px-6 py-3 font-light">
                    Default
                  </Button>
                  <Button variant="destructive" className="rounded-full px-6 py-3 font-light">
                    Destructive
                  </Button>
                  <Button variant="outline" className="rounded-full px-6 py-3 font-light">
                    Outline
                  </Button>
                  <Button variant="secondary" className="rounded-full px-6 py-3 font-light">
                    Secondary
                  </Button>
                  <Button variant="ghost" className="rounded-full px-6 py-3 font-light">
                    Ghost
                  </Button>
                  <Button variant="link" className="px-6 py-3 font-light">
                    Link
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>Different button sizes for different contexts.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2">
                  <Button size="default">Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" className="h-10 w-10">
                    <Check className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Cards Tab */}
          <TabsContent value="cards" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card with header and content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content of the card.</p>
                </CardContent>
                <CardFooter>
                  <p>Card footer with actions or additional information.</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="bg-primary text-primary-foreground rounded-t-2xl">
                  <CardTitle>Card with Colored Header</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    A card with a colored header.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>This card has a colored header for emphasis.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Inputs Tab */}
          <TabsContent value="inputs" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Text Inputs</CardTitle>
                  <CardDescription>Various text input components.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-light px-1">
                        Email
                      </Label>
                      <Input id="email" placeholder="Enter your email" type="email" className="rounded-xl px-5 py-3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="font-light px-1">
                        Password
                      </Label>
                      <Input
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        className="rounded-xl px-5 py-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-light px-1">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Type your message here" className="rounded-xl px-5 py-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Controls</CardTitle>
                  <CardDescription>Checkboxes, radio buttons, and switches.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Checkboxes</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing">Receive marketing emails</Label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Radio Group</Label>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="airplane-mode">Switch</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Slider</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dropdowns Tab */}
          <TabsContent value="dropdowns" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Select Dropdown</CardTitle>
                  <CardDescription>Standard select dropdown component.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework" className="rounded-full">
                        <SelectValue placeholder="Select a framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Menu</CardTitle>
                  <CardDescription>Context menu with multiple options.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="rounded-full">
                      <Button variant="outline">
                        Options <ChevronsUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Date Picker</CardTitle>
                  <CardDescription>Calendar-based date selection.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild className="rounded-full">
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dialogs Tab */}
          <TabsContent value="dialogs" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>Modal dialog for user interactions.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" defaultValue="Alesha Hyocinth" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" defaultValue="alesha" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Dialog</CardTitle>
                  <CardDescription>Confirmation dialog for critical actions.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete Account</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account and remove your data
                          from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tables Tab */}
          <TabsContent value="tables" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>Tabular data presentation.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption className="font-light py-4">A list of recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow className="rounded-t-2xl">
                      <TableHead className="font-light">Invoice</TableHead>
                      <TableHead className="font-light">Status</TableHead>
                      <TableHead className="font-light">Method</TableHead>
                      <TableHead className="text-right font-light">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-light">INV001</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 rounded-xl px-4 py-1 font-light">
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell className="font-light">Credit Card</TableCell>
                      <TableCell className="text-right font-light">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-light">INV002</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-yellow-50 text-yellow-700 rounded-xl px-4 py-1 font-light"
                        >
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell className="font-light">PayPal</TableCell>
                      <TableCell className="text-right font-light">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-light">INV003</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          Overdue
                        </Badge>
                      </TableCell>
                      <TableCell>Bank Transfer</TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-light">INV004</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Misc Tab */}
          <TabsContent value="misc" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Avatars</CardTitle>
                  <CardDescription>User profile pictures and placeholders.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Avatar>
                    <AvatarImage src="" alt="Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AH</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status indicators and labels.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>Visual indicators of progress.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label>25%</Label>
                    <Progress value={25} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>50%</Label>
                    <Progress value={50} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>75%</Label>
                    <Progress value={75} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                  <CardDescription>Visual dividers between content.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>Section 1</div>
                  <Separator />
                  <div>Section 2</div>
                  <Separator />
                  <div>Section 3</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

