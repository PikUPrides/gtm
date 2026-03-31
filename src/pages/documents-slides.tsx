import React, { useState } from 'react';
import Header from '../components/Header.jsx';

const slides = [
  {
    number: 1,
    title: "COVER",
    variants: [
      {
        label: "Variant A",
        content: `AYRO — A ride-sharing app that charges 5% commission instead of Uber's 40%+. Rides cost half. Drivers keep 95%. Both sides see every dollar.`
      },
      {
        label: "Variant B", 
        content: `AYRO — The Costco of ride-sharing. 5% take rate. Half-price rides. Full transparency. Low margin, high volume.`
      },
      {
        label: "Variant C",
        content: `AYRO — Half-price rides for passengers. 95% take-home for drivers. Full fare transparency on every trip. 5% commission. That's it.`
      }
    ],
    accent: "blue"
  },
  {
    number: 2,
    title: "PROBLEM",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "THE RECEIPT STORY",
          paragraphs: [
            "On one ride: rider paid $35, driver got $12, and paid $2 in tolls out of pocket. Uber kept $23. This isn't a glitch — it's the business model.",
            "Uber's average take rate hit 40% in 2023 and reached a record high in 2024. On individual rides it reaches 65–70%.",
            "Uber started at 10% commission — they've quadrupled it.",
            "Source: NELP 'Unpacking Uber & Lyft's Predatory Take Rates,' May 2025 & July 2025 updates, citing Gridwise and YipitData — nelp.org/insights-research/unpacking-uber-and-lyfts-predatory-take-rates/"
          ],
          subSections: [
            {
              title: "Fares Are Up",
              items: [
                "Fares are up 52% since 2019",
                "From 2019 to mid-2022 the average fare jumped 63%, then declined ~8% from peak, netting 52% above 2019 levels",
                "Source: Calcalist/Ctech, 'Uber's path to profit,' Feb 16, 2025 — calcalistech.com/ctechnews/article/j67u6f5i1"
              ]
            },
            {
              title: "Driver Pay Is Falling",
              items: [
                "Average Uber driver earnings dropped to $513/week in 2024 (from $531 in 2023)",
                "Lyft drivers fell 14% to $318/week",
                "After expenses, median driver profit is $8.55/hour — below minimum wage in 13 of 20 major US markets",
                "Source: Gridwise 2025 Annual Mobility Report, cited in NELP July 2025 — nelp.org",
                "Source ($8.55/hr): Economic Policy Institute, 'Uber and the labor market,' 2023 — epi.org/publication/uber-and-the-labor-market/"
              ]
            },
            {
              title: "The Transparency Problem",
              items: [
                "In 2022 Uber decoupled rider fares from driver pay using opaque algorithms — neither side sees the real split",
                "In Q1 2025 Uber stopped disclosing take rates entirely",
                "They filed an injunction to block Colorado's transparency law in Jan 2025",
                "Congress introduced the Empowering App-Based Workers Act in 2025 to cap take rates at 25% and force per-trip disclosure",
                "Source (decoupled 2022): NELP May 2025, citing Forbes (Len Sherman, Dec 15, 2023)",
                "Source (stopped disclosing + Colorado injunction): Medianama, 'Uber Upfront Pricing Boosts Profits,' July 2, 2025 — medianama.com/2025/07/223-study-uber-upfront-pricing-profit-driver-loss/",
                "Source (Empowering Act): NELP July 2025 — nelp.org"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "THE HISTORY ARC",
          paragraphs: [
            "Uber launched at 10% commission. Today it averages 40%, sometimes 65%. They went from disrupting taxis to becoming worse than taxis."
          ],
          subSections: [
            {
              title: "Commission History",
              items: [
                "10% (2012) → 20% → 25% (2014) → decoupled/opaque (2022) → 40% avg, 65–70% on some rides (2023–2024)",
                "Uber's own reported rate went from 20.7% to 27.1% — but the real driver-experienced rate is nearly double",
                "Source: NELP May 2025 — 'Uber initially attracted drivers by offering them a set percentage of each customer fare, with promotional commissions as high as 90 percent'",
                "Source: Forbes, Ellen Huet, Sep 22, 2014 — forbes.com/sites/ellenhuet/2014/09/22/uber-now-taking-its-biggest-uberx-commission-ever-25-percent/",
                "Source: Calcalist/Ctech, Feb 16, 2025"
              ]
            },
            {
              title: "Rider Fares vs Driver Earnings",
              items: [
                "Rider fares up 52% since 2019",
                "Driver earnings down YoY in both 2023 and 2024"
              ]
            },
            {
              title: "Where the Money Goes",
              items: [
                "Uber's free cash flow: $9.8B in 2025, up 42%",
                "$7B stock buyback announced",
                "The money flows to Wall Street, not to drivers or riders",
                "Source: Uber Q4 2025 earnings report, Feb 4, 2026 — reported via evrimagaci.org/gpt/uber-posts-record-growth-but-misses-wall-street-targets-526899",
                "Source: Power Switch Action, 'Uber Takes Us for a Ride' — powerswitchaction.org/resources/uber-takes-us-for-a-ride/"
              ]
            },
            {
              title: "Regulatory Response",
              items: [
                "Uber sued to block Colorado's transparency law",
                "Stopped disclosing take rates",
                "Blocked third-party driver pricing tools via cease-and-desist orders",
                "Source: Medianama, July 2, 2025; NELP May & July 2025"
              ]
            }
          ]
        }
      },
      {
        label: "Variant C",
        content: {
          heading: "THE MARKET EXPANSION ANGLE",
          paragraphs: [
            "72% of Americans don't actively use rideshare apps. Price is a major barrier. And the reason rides are so expensive: Uber takes 40–65% of every fare."
          ],
          subSections: [
            {
              title: "The 72% Problem",
              items: [
                "72% of Americans don't use ride-hailing apps",
                "Only 8% are frequent users",
                "21% are occasional",
                "Source: Statista Consumer Market Insights, survey conducted Oct 2022–Sep 2023, cited in AutoInsurance.com 'Rideshare Statistics for 2024' — autoinsurance.com/research/rideshare-statistics/",
                "Note: This measures active non-users, not 'never heard of it.'",
                "Separately, Pew Research (2019) found 36% of US adults have 'ever used' a rideshare service. Both are true — most Americans have heard of rideshare but 72% don't actively use it."
              ]
            },
            {
              title: "The Price Spread",
              items: [
                "A ride that costs the driver ~$17 in time, gas, and mileage gets priced at $35 to the rider",
                "Uber pockets the spread",
                "[This is AYRO's business model calculation, not an external source]"
              ]
            },
            {
              title: "Why Uber Can't Lower Prices",
              items: [
                "Wall Street won't allow it",
                "$52B revenue",
                "$9.8B free cash flow",
                "$7B stock buyback",
                "Stock price depends on high take rates",
                "Source: Uber Q4 2025 / FY2025 earnings, Feb 4, 2026 — '$52.0 billion revenue, 18% increase'; '$9.8 billion free cash flow, up 42%'"
              ]
            }
          ]
        }
      }
    ],
    accent: "red"
  },
  {
    number: 3,
    title: "SOLUTION",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "DIRECT MIRROR",
          paragraphs: [
            "AYRO charges 5% commission. Riders pay half. Drivers keep 95%. Both sides see the exact breakdown on every trip.",
            "Same $35 Uber ride costs ~$17 on AYRO. Driver gets ~$16.15. AYRO keeps $0.85.",
            "No hidden fees. No algorithmic manipulation."
          ],
          subSections: [
            {
              title: "Zero Surge",
              items: [
                "Flat rates based on distance + time",
                "Price locked before booking",
                "[AYRO product feature — internal]"
              ]
            },
            {
              title: "Full Transparency",
              items: [
                "Full receipt transparency after every trip",
                "Uber literally sued to prevent this — they filed an injunction against Colorado's transparency law and stopped disclosing take rates",
                "Source (Colorado injunction): Medianama, July 2, 2025",
                "Source (stopped disclosing): Medianama, July 2, 2025 — 'As of Q1 2025, Uber stopped disclosing its global rideshare take rates'"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "COSTCO MODEL",
          paragraphs: [
            "AYRO applies the Costco model to ride-sharing: take almost nothing per transaction, win on volume, let savings bring everyone in."
          ],
          subSections: [
            {
              title: "Costco's Formula",
              items: [
                "Costco's gross margin is 12.7% vs Walmart 24.6% and Target 28.5%",
                "Despite the lowest margins in retail, Costco is worth $400B+",
                "73% of Costco's profit comes from membership fees, not product markups",
                "Net profit margin: 2.96%",
                "Source: Motley Fool, 'Costco Wholesale Is a Fabulous Company,' Dec 28, 2023 — finance.yahoo.com",
                "Source: Motley Fool, 'Costco Sells Everything From Gas to Gold Bars,' Jan 3, 2024 — fool.com",
                "Source: MacroTrends, Costco Profit Margin 2012–2025 — macrotrends.net/stocks/charts/COST/costco/profit-margins"
              ]
            },
            {
              title: "Market Expansion Potential",
              items: [
                "At half the price, AYRO doesn't just take Uber's riders — it can unlock a portion of the 72% who don't actively use rideshare",
                "Price is the biggest lever for market expansion",
                "Source (72%): Statista Consumer Market Insights, Oct 2022–Sep 2023"
              ]
            }
          ]
        }
      },
      {
        label: "Variant C",
        content: {
          heading: "TWO-SIDED VALUE PROP",
          paragraphs: [
            "AYRO solves both sides at once: riders pay half, drivers earn more per ride, and both see exactly where every dollar goes."
          ],
          subSections: [
            {
              title: "FOR RIDERS",
              items: [
                "Same trip, half the price, no surge",
                "Full breakdown shown",
                "[AYRO product — internal]"
              ]
            },
            {
              title: "FOR DRIVERS",
              items: [
                "Keep 95% instead of 56–60%",
                "On a $17 AYRO ride driver keeps ~$16.15",
                "On equivalent $35 Uber ride driver might keep ~$12 and pays tolls out of pocket",
                "Source (Uber driver keeps 56–60%): Peanut Politician, 'The Ride-Sharing Divide,' May 7, 2025, citing 30–44% commission range — 'leaving drivers with 56–70% of each fare'",
                "[AYRO driver math — internal, confirm with CEO]"
              ]
            },
            {
              title: "Regulatory Alignment",
              items: [
                "This is what Congress is trying to force Uber to do via the Empowering App-Based Workers Act",
                "AYRO does it voluntarily",
                "Source: NELP July 2025"
              ]
            }
          ]
        }
      }
    ],
    accent: "green"
  },
  {
    number: 4,
    title: "MARKET",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "PRICE UNLOCKS NON-USERS",
          paragraphs: [
            "The US ride-hailing market is $59.3B — but only 28% of Americans actively use it. At half the price, AYRO can expand the market by converting price-sensitive non-users."
          ],
          subSections: [
            {
              title: "TAM: US Ride-Hailing",
              items: [
                "$59.3B in 2025, growing to $72.6B by 2030 at 4.15% CAGR",
                "ARPU $629/year",
                "User penetration 27.1%",
                "Source: Statista Market Forecast, 'Ride-hailing — United States,' 2025 — statista.com/outlook/mmo/shared-mobility/ride-hailing/united-states"
              ]
            },
            {
              title: "SAM: DFW + Texas",
              items: [
                "DFW metro 8M people",
                "Texas 30M",
                "At current 28% penetration = ~8.4M Texas rideshare users",
                "Source (28% penetration): Statista — 27.1% rounded; also Enterprise Apps Today cites 28.1% US penetration"
              ]
            },
            {
              title: "SOM Year 1: DFW Beachhead",
              items: [
                "20,000 active riders × $500 avg annual spend (below Uber's $629 ARPU, reflecting AYRO's lower pricing) = $10M gross",
                "At 5% = $500K net",
                "Source ($629 ARPU): Statista Market Forecast 2025",
                "[20,000 rider target and $500 adjusted ARPU = AYRO projections]"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "BOTTOM-UP FROM RIDES",
          paragraphs: [
            "5,000 rides/day in DFW at $17 avg fare = $31M annual ride volume. That's roughly 3% of Uber's estimated DFW daily rides."
          ],
          subSections: [
            {
              title: "Uber's Scale",
              items: [
                "Uber does approximately 37 million rides/day globally (13.6B trips ÷ 365)",
                "US is ~35% = ~13M rides/day",
                "DFW is roughly 2–3% of US population, suggesting 260,000–390,000 Uber rides/day in DFW",
                "Source (13.6B trips 2025): Uber Q4 2025 earnings, Feb 4, 2026",
                "[DFW estimate is extrapolated — flag this as 'AYRO estimate based on population share']"
              ]
            },
            {
              title: "AYRO Year 1 Economics",
              items: [
                "5,000 rides × $17 × 365 = $31M gross",
                "At 5% = $1.55M net Year 1",
                "[AYRO projection]"
              ]
            },
            {
              title: "Growth Roadmap",
              items: [
                "Phase 1: DFW",
                "Phase 2: Texas-wide",
                "Phase 3: National",
                "[AYRO roadmap]"
              ]
            }
          ]
        }
      },
      {
        label: "Variant C",
        content: {
          heading: "UBER'S NUMBERS AGAINST THEM",
          paragraphs: [
            "Uber did 13.6B trips in 2025, $193.5B gross bookings, $52B revenue. AYRO needs a sliver at half the price."
          ],
          subSections: [
            {
              title: "Uber's 2025 Performance",
              items: [
                "Total trips for 2025 hit 13.6 billion, up 20% from 2024",
                "Gross bookings reached $193.5 billion, a 19% increase",
                "Revenue rose 18% to $52.0 billion",
                "Source: Uber investor relations, reported via evrimagaci.org"
              ]
            },
            {
              title: "DFW Beachhead Economics",
              items: [
                "20K riders, 5K rides/day, $31M annual gross, $1.55M net",
                "[AYRO projection]"
              ]
            }
          ]
        }
      }
    ],
    accent: "purple"
  },
  {
    number: 5,
    title: "HOW IT WORKS",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "3 STEPS",
          paragraphs: [
            "Rider opens AYRO → sees a flat price (no surge) → after the trip, both rider and driver see the exact fare split."
          ],
          subSections: [
            {
              title: "Step 1: Price Discovery",
              items: [
                "Flat fare based on distance + time",
                "No surge",
                "No dynamic pricing",
                "Price locked before booking"
              ]
            },
            {
              title: "Step 2: Driver Matching",
              items: [
                "Nearest driver gets the request",
                "Driver sees exactly what they'll earn before accepting"
              ]
            },
            {
              title: "Step 3: Post-Trip Transparency",
              items: [
                "Both sides see: 'Rider paid $17.00. Driver received $16.15. AYRO kept $0.85.'",
                "[All product features — internal. No external sources needed.]"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "WHAT'S DIFFERENT FROM UBER",
          paragraphs: [
            "Everything works like Uber — request, match, ride, pay — except three things: the price is half, there's no surge, and both sides see the real numbers.",
            "Same convenience. We're not reinventing ride-sharing — we're fixing how it's priced."
          ],
          subSections: [
            {
              title: "Key Differences",
              items: [
                "(1) 5% commission = fare roughly half",
                "(2) No surge ever",
                "(3) Full transparency receipt"
              ]
            },
            {
              title: "Platform Coverage",
              items: [
                "AYRO handles insurance",
                "[All AYRO product — internal. Confirm insurance details with CEO.]"
              ]
            }
          ]
        }
      }
    ],
    accent: "teal"
  },
  {
    number: 6,
    title: "BUSINESS MODEL",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "PURE MATH",
          paragraphs: [
            "5% flat commission on every ride.",
            "$17 ride → AYRO keeps $0.85 → Driver keeps $16.15.",
            "Low margin. High volume.",
            "Per ride: small revenue, but half-price drives significantly more volume. Uber can't match without destroying $52B revenue."
          ],
          subSections: [
            {
              title: "Uber's Revenue",
              items: [
                "$52B revenue (2025)",
                "Source: Uber Q4 2025 earnings, Feb 4, 2026"
              ]
            },
            {
              title: "Why It Works at Low Cost",
              items: [
                "Uber and Lyft spent billions educating cold audiences",
                "That education is done — only 3% of Americans haven't heard of rideshare as of 2021",
                "AYRO targets warm, frustrated customers",
                "Minimal education cost",
                "Source: Multiple rideshare stats roundups citing Statista/Pew — 'In 2015, 33% of Americans said they had never heard of a ridesharing service. That number fell to just 3% in 2021.' — cmslaw.com/blog/ridesharing-statistics-you-need-to-know/"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "OPPOSITE TRAJECTORY",
          paragraphs: [
            "Uber launched at 10% and raised to 40%.",
            "AYRO launches at 5% and stays there."
          ],
          subSections: [
            {
              title: "Uber Commission History",
              items: [
                "10% → 20% → 25% → decoupled → 40% avg → 65% on some rides",
                "Source: NELP May & July 2025; Forbes Sep 2014"
              ]
            },
            {
              title: "AYRO's Advantage",
              items: [
                "5% flat",
                "No $52B overhead, no $7B buyback, no lobbyist army",
                "Source ($52B, $7B): Uber Q4 2025 earnings; Power Switch Action"
              ]
            },
            {
              title: "Revenue at Scale",
              items: [
                "5,000 rides/day × $17 × 5% = ~$1.55M/year DFW",
                "[AYRO projection]"
              ]
            }
          ]
        }
      },
      {
        label: "Variant C",
        content: {
          heading: "TABLE FORMAT: UBER VS AYRO",
          paragraphs: [],
          subSections: [
            {
              title: "Take Rate",
              items: [
                "Uber: 40% avg, up to 65% (NELP July 2025)",
                "AYRO: 5% flat"
              ]
            },
            {
              title: "$35 Ride Comparison",
              items: [
                "Uber platform keeps ~$23 (derived from 40%+ take + fees)",
                "AYRO keeps ~$0.85"
              ]
            },
            {
              title: "Driver Gets",
              items: [
                "Uber: ~$12 (real driver example)",
                "AYRO: ~$16.15"
              ]
            },
            {
              title: "Rider Pays",
              items: [
                "Uber: $35",
                "AYRO: ~$17"
              ]
            },
            {
              title: "Surge Pricing",
              items: [
                "Uber: Yes, 2–3x (Uber app feature)",
                "AYRO: Never"
              ]
            },
            {
              title: "Transparency",
              items: [
                "Uber: Opaque, decoupled since 2022 (NELP)",
                "AYRO: Full breakdown"
              ]
            },
            {
              title: "Commission Trend",
              items: [
                "Uber: Rising since 2012 (NELP/Ctech)",
                "AYRO: Fixed at 5%"
              ]
            }
          ]
        }
      }
    ],
    accent: "amber"
  },
  {
    number: 7,
    title: "GO-TO-MARKET",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "PRICE IS THE MARKETING",
          paragraphs: [
            "The price IS the go-to-market. When a ride costs $17 instead of $35, people talk.",
            "Near-zero CAC.",
            "Uber/Lyft burned billions on cold audience education. That job is done — 97% of Americans know what rideshare is."
          ],
          subSections: [
            {
              title: "Market Education Done",
              items: [
                "In 2015, 33% had never heard of ridesharing",
                "That fell to just 3% in 2021",
                "Source: Statista/Pew via CMS Law — cmslaw.com/blog/ridesharing-statistics-you-need-to-know/"
              ]
            },
            {
              title: "Viral Loop",
              items: [
                "Rider saves ~$18 → sees transparent receipt → screenshots → shares",
                "The receipt IS the ad",
                "[AYRO GTM strategy — internal]"
              ]
            },
            {
              title: "Driver Recruiting",
              items: [
                "Drivers keep 95% vs 56–60% at Uber",
                "Self-recruiting supply side",
                "Source (Uber driver keeps 56–60%): Peanut Politician, May 2025 — 'Uber and Lyft's commission rates, ranging from 30–44%, leaving drivers with 56–70% of each fare'"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "DFW BEACHHEAD",
          paragraphs: [
            "Launch in DFW — 4th largest US metro, 8M people, suburban sprawl means long rides and bigger savings per trip."
          ],
          subSections: [
            {
              title: "Why DFW?",
              items: [
                "DFW is the 4th largest US metro by population",
                "Source: US Census Bureau metro area population estimates"
              ]
            },
            {
              title: "Phases",
              items: [
                "Phase 1: 500 drivers, 5,000 riders",
                "Phase 2: Houston, Austin, SA",
                "Phase 3: Texas",
                "Phase 4: National",
                "[AYRO roadmap — internal]"
              ]
            }
          ]
        }
      },
      {
        label: "Variant C",
        content: {
          heading: "TWO-SIDED FLYWHEEL",
          paragraphs: [
            "Half-price rides attract riders → 95% take-home attracts drivers → more drivers = faster pickups → more rides → flywheel spins on price."
          ],
          subSections: [
            {
              title: "Driver Economics",
              items: [
                "Driver earns ~$16.15 on AYRO's $17 ride vs ~$12 on Uber's $35 ride",
                "They earn MORE on a CHEAPER ride",
                "[AYRO model — confirm exact math with CEO]"
              ]
            },
            {
              title: "Amazon Flywheel Comparison",
              items: [
                "low margin → low price → high volume → scale → costs stay low → repeat",
                "Source (Amazon flywheel concept): Jim Collins, 'Good to Great' (2001); Jeff Bezos napkin sketch — widely documented, e.g. feedvisor.com, sellerlogic.com"
              ]
            }
          ]
        }
      }
    ],
    accent: "indigo"
  },
  {
    number: 8,
    title: "COMPETITION",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "BENEFITS COMPARISON",
          paragraphs: [
            "Same ride. Half the price. 95% driver take-home. Full transparency. No surge. Nobody else offers all five."
          ],
          subSections: [
            {
              title: "Feature Comparison: AYRO vs Uber vs Lyft",
              items: [
                "AYRO: Price ~$17 ✅ | Driver take-home 95% ✅ | Surge Never ✅ | Transparency Full breakdown ✅ | Commission Fixed 5% ✅",
                "Uber: Price ~$35 ❌ | Driver take-home 56–60% ❌ | Surge Yes (2–3x) ❌ | Transparency Opaque ❌ | Commission Rising yearly ❌",
                "Lyft: Price ~$32 ❌ | Driver take-home 70% claimed* ⚠️ | Surge Yes ❌ | Transparency Partial ⚠️ | Commission Rising ❌"
              ]
            },
            {
              title: "Sources",
              items: [
                "Source (Uber 56–60%): Peanut Politician May 2025, citing 30–44% commission",
                "Source (Lyft 70% claimed): CBS News, Feb 6, 2024 — 'Lyft promised its drivers will receive at least 70% of the money their clients pay'",
                "BUT NELP May 2025 notes Lyft gives '70 percent of the fare after subtracting unspecified costs and fees, engaging in deceptive math'",
                "Lyft's 70% marked ⚠️ because their actual payout after hidden deductions is lower"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "WHY THEY CAN'T RESPOND",
          paragraphs: [
            "Uber can't match AYRO's price. Not because they can't — because Wall Street won't let them."
          ],
          subSections: [
            {
              title: "Uber's 2025 Numbers",
              items: [
                "$52B revenue",
                "$9.8B free cash flow",
                "$7B stock buyback",
                "$8.7B adjusted EBITDA",
                "Source: Uber Q4 2025 earnings, Feb 4, 2026"
              ]
            },
            {
              title: "Direction of Travel",
              items: [
                "Uber is RAISING take rates, fighting transparency, suing states",
                "Moving opposite direction from AYRO",
                "Source (commission rose 20.7% → 27.1%): Calcalist/Ctech, Feb 2025",
                "Source (sued Colorado, stopped disclosing, blocked driver tools): Medianama, July 2025"
              ]
            },
            {
              title: "The Innovator's Dilemma",
              items: [
                "If they drop rates in DFW to fight AYRO, every driver and rider nationally demands the same",
                "They can't contain it",
                "[Strategic analysis — no external source needed, but the concept is from Clayton Christensen, 'The Innovator's Dilemma,' 1997]"
              ]
            }
          ]
        }
      }
    ],
    accent: "rose"
  },
  {
    number: 9,
    title: "TEAM",
    variants: [
      {
        label: "Placeholder",
        content: {
          heading: "COMING SOON",
          paragraphs: [],
          subSections: [
            {
              title: "Team Information",
              items: [
                "[HEADLINE]: Our team has [X] years combined experience in [domain]. We've [achievement]. We're full-time on AYRO.",
                "[FOUNDER 1] — CEO — [background, key achievement]",
                "[FOUNDER 2] — [Role] — [background, key achievement]",
                "[ADVISOR IF ANY] — [why they matter]",
                "How you work together: [shared history, complementary skills]",
                "[No external sources — all internal team data]"
              ]
            }
          ]
        }
      }
    ],
    accent: "cyan"
  },
  {
    number: 10,
    title: "TRACTION + ASK",
    variants: [
      {
        label: "Variant A",
        content: {
          heading: "CURRENT STATE",
          paragraphs: [
            "App is near completion. Every driver and rider we've spoken to is heavily interested.",
            "Raising $1M for DFW, $2M for Texas."
          ],
          subSections: [
            {
              title: "Product",
              items: [
                "App nearly complete",
                "[Add: launch date, features completed]"
              ]
            },
            {
              title: "Validation",
              items: [
                "Strong interest from every driver and rider in conversations",
                "[Add: number of conversations, any signups, any recorded feedback]"
              ]
            },
            {
              title: "The Ask",
              items: [
                "$1M for DFW — 20,000 riders, 500 drivers, prove flywheel in 12 months",
                "$2M total for Texas expansion"
              ]
            },
            {
              title: "Use of Funds",
              items: [
                "40% product | 35% growth | 25% ops/insurance/legal",
                "[All internal — no external sources needed]"
              ]
            }
          ]
        }
      },
      {
        label: "Variant B",
        content: {
          heading: "MILESTONE-BASED",
          paragraphs: [
            "We are raising $1M to launch AYRO in DFW, acquire 20,000 riders, onboard 500 drivers, and prove that 5% commission works at scale — within 12 months."
          ],
          subSections: [
            {
              title: "Funding Milestones",
              items: [
                "$1M = DFW proof of flywheel",
                "$2M = Texas-wide"
              ]
            },
            {
              title: "The Opportunity",
              items: [
                "Uber is $170B market cap built on a 40% take rate that both sides hate",
                "AYRO is the reset",
                "Source (~$170B market cap): Uber stock trading ~$80 × ~2.1B shares, Dec 2025 — reported in ts2.tech Uber stock analysis, Dec 23, 2025"
              ]
            }
          ]
        }
      }
    ],
    accent: "emerald"
  }
];

const sources = [
  { num: 1, claim: "Uber take rate 40% avg, 65-70% on some rides", source: "NELP 'Unpacking Take Rates'", date: "Jul 2025", url: "nelp.org" },
  { num: 2, claim: "Uber started at 10%, drivers got 90%", source: "NELP", date: "May 2025", url: "nelp.org" },
  { num: 3, claim: "25% commission in 2014", source: "Forbes (Ellen Huet)", date: "Sep 2014", url: "forbes.com" },
  { num: 4, claim: "Fares up 52% since 2019", source: "Calcalist/Ctech", date: "Feb 2025", url: "calcalistech.com" },
  { num: 5, claim: "Commission rose 20.7% → 27.1% (Uber reported)", source: "Calcalist/Ctech", date: "Feb 2025", url: "calcalistech.com" },
  { num: 6, claim: "Driver earnings $513/wk Uber, $318/wk Lyft", source: "Gridwise 2025 Annual Report via NELP", date: "Jul 2025", url: "nelp.org" },
  { num: 7, claim: "$8.55/hr median driver profit", source: "EPI", date: "2023", url: "epi.org" },
  { num: 8, claim: "Decoupled fares from pay in 2022", source: "NELP citing Forbes (Len Sherman)", date: "Dec 2023", url: "nelp.org" },
  { num: 9, claim: "Stopped disclosing take rates Q1 2025", source: "Medianama", date: "Jul 2025", url: "medianama.com" },
  { num: 10, claim: "Sued to block Colorado transparency law", source: "Medianama", date: "Jul 2025", url: "medianama.com" },
  { num: 11, claim: "Blocked driver pricing tools", source: "Medianama", date: "Jul 2025", url: "medianama.com" },
  { num: 12, claim: "Empowering App-Based Workers Act 2025", source: "NELP", date: "Jul 2025", url: "nelp.org" },
  { num: 13, claim: "FTC sued Uber Dec 2025 (re: Uber One)", source: "ts2.tech / Uber stock analysis", date: "Dec 2025", url: "ts2.tech" },
  { num: 14, claim: "72% don't use rideshare apps", source: "Statista Consumer Market Insights", date: "Oct 2022–Sep 2023", url: "via autoinsurance.com" },
  { num: 15, claim: "3% never heard of rideshare (2021)", source: "Statista/Pew via CMS Law", date: "2021", url: "cmslaw.com" },
  { num: 16, claim: "36% ever used rideshare", source: "Pew Research", date: "Jan 2019", url: "pewresearch.org" },
  { num: 17, claim: "US ride-hailing market $59.3B, ARPU $629", source: "Statista Market Forecast", date: "2025", url: "statista.com" },
  { num: 18, claim: "27.1% user penetration US", source: "Statista Market Forecast", date: "2025", url: "statista.com" },
  { num: 19, claim: "Uber $52B revenue, $9.8B FCF, 13.6B trips", source: "Uber Q4 2025 earnings", date: "Feb 4, 2026", url: "via evrimagaci.org" },
  { num: 20, claim: "$193.5B gross bookings", source: "Uber Q4 2025 earnings", date: "Feb 4, 2026", url: "via evrimagaci.org" },
  { num: 21, claim: "$7B stock buyback", source: "Power Switch Action", date: "2024", url: "powerswitchaction.org" },
  { num: 22, claim: "$8.7B adjusted EBITDA", source: "Uber Q4 2025 earnings", date: "Feb 4, 2026", url: "via evrimagaci.org" },
  { num: 23, claim: "Uber driver keeps 56–60%", source: "Peanut Politician", date: "May 2025", url: "peanutpolitician.com" },
  { num: 24, claim: "Lyft promised 70% (with deductions)", source: "CBS News + NELP", date: "Feb 2024 / May 2025", url: "cbsnews.com / nelp.org" },
  { num: 25, claim: "Costco gross margin 12.7%", source: "Motley Fool", date: "Dec 2023", url: "finance.yahoo.com" },
  { num: 26, claim: "73% Costco profit from membership", source: "Motley Fool", date: "Jan 2024", url: "fool.com" },
  { num: 27, claim: "Costco net margin 2.96%", source: "MacroTrends", date: "2025", url: "macrotrends.net" },
  { num: 28, claim: "~$170B Uber market cap", source: "ts2.tech stock analysis", date: "Dec 2025", url: "ts2.tech" }
];

const accentColors = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600", text: "text-blue-900", light: "bg-blue-100" },
  red: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-600", text: "text-red-900", light: "bg-red-100" },
  green: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-600", text: "text-green-900", light: "bg-green-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-600", text: "text-purple-900", light: "bg-purple-100" },
  teal: { bg: "bg-teal-50", border: "border-teal-200", badge: "bg-teal-600", text: "text-teal-900", light: "bg-teal-100" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-600", text: "text-amber-900", light: "bg-amber-100" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-200", badge: "bg-indigo-600", text: "text-indigo-900", light: "bg-indigo-100" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", badge: "bg-rose-600", text: "text-rose-900", light: "bg-rose-100" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", badge: "bg-cyan-600", text: "text-cyan-900", light: "bg-cyan-100" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-600", text: "text-emerald-900", light: "bg-emerald-100" }
};

function SlideContent({ content, colors }) {
  if (typeof content === 'string') {
    return <p className="text-slate-700 leading-relaxed text-base">{content}</p>;
  }

  return (
    <div className="space-y-5">
      {/* Main Heading */}
      {content.heading && (
        <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-2`}>
          {content.heading}
        </h3>
      )}

      {/* Opening Paragraphs */}
      {content.paragraphs && content.paragraphs.length > 0 && (
        <div className="space-y-3">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* SubSections with Bullets */}
      {content.subSections && content.subSections.map((section, idx) => (
        <div key={idx} className="mt-4">
          <h4 className={`text-lg font-semibold ${colors.text} mb-2`}>
            {section.title}
          </h4>
          <ul className="space-y-2 ml-4">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx} className="text-slate-700 leading-relaxed text-base list-disc">
                <span dangerouslySetInnerHTML={{ 
                  __html: item.replace(/Source: (.*?) — (.*?) — (.*?)$/g, '<span class="text-slate-500 text-sm block mt-1">Source: $1 — $2</span>')
                              .replace(/(nelp\.org|forbes\.com|calcalistech\.com|medianama\.com|cbsnews\.com|ts2\.tech|statista\.com|epi\.org|powerswitchaction\.org|finance\.yahoo\.com|fool\.com|cmslaw\.com|macrotrends\.net|autoinsurance\.com|peanutpolitician\.com|pewresearch\.org|evrimagaci\.org)(?:\/[^/\s]*)*/g, '<a href="https://$&" target="_blank" class="text-blue-600 hover:underline">$&</a>')
                }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const [expandedSlide, setExpandedSlide] = useState(1);

  const toggleSlide = (num) => {
    setExpandedSlide(expandedSlide === num ? null : num);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white/80 text-sm font-medium">Slide Content</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ayro <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Slide</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Complete slide-by-slide breakdown with multiple variants. All claims sourced with full citations. 
            Every word included — ready for investor presentations.
          </p>
        </div>
      </div>

      {/* Slides Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {slides.map((slide) => {
            const colors = accentColors[slide.accent];
            const isExpanded = expandedSlide === slide.number;
            
            return (
              <div 
                key={slide.number}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${colors.bg} ${colors.border}`}
              >
                {/* Slide Header - Clickable */}
                <button
                  onClick={() => toggleSlide(slide.number)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.badge} text-white font-bold text-lg shadow-lg`}>
                      {slide.number}
                    </span>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>{slide.title}</h2>
                    <span className={`text-sm ${colors.text}/60`}>({slide.variants.length} Variants)</span>
                  </div>
                  <div className={`p-2 rounded-lg ${colors.light} ${colors.text} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Variants */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[8000px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 space-y-6">
                    {slide.variants.map((variant, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${colors.badge} text-white`}>
                            {variant.label}
                          </span>
                        </div>
                        <SlideContent content={variant.content} colors={colors} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Source List */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Master Source List — 28 Sources
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Claim</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Source</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-300">URL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sources.map((row) => (
                    <tr key={row.num} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-slate-400">{row.num}</td>
                      <td className="py-3 px-4 text-slate-200">{row.claim}</td>
                      <td className="py-3 px-4 text-slate-300">{row.source}</td>
                      <td className="py-3 px-4 text-slate-400">{row.date}</td>
                      <td className="py-3 px-4 text-blue-300 text-xs">{row.url}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            All 28 external sources verified and cited. Internal projections marked as AYRO estimates. 
            Every word from original content included.
          </p>
        </div>
      </div>
    </div>
  );
}