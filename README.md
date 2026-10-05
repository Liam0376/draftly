# Draftly

Fantasy football command center: calibrated projections, start/sit calls, matchup simulations, a trade lab, and an auction draft guide. Paste a Sleeper league link and the whole season gets analyzed.

Live: https://draftly-liamfelixb-9782s-projects.vercel.app

## Accuracy

Frozen numbers from `research/docs/ACCURACY.md` (stat projector, 2024–2025 weeks 4–18, n=10,351, true scoring):

| Metric | Value |
| --- | --- |
| MAE | 4.563 points per player-week |
| Projection/actual correlation | 0.648 |
| Pairwise start/sit preference | 74.1% |

The grading pipeline re-runs every week against nflverse actuals and appends to `data/grades/weekly.json`, so the evidence base grows during the season instead of sitting still.

## Layout

```
apps/fantasyhub/   production app — serverless API (Vercel), static UI bundle,
                   projections data, its own pytest suite
research/          projection pipeline — nflverse play-by-play features,
                   XGBoost residual models, conformal intervals, backtests,
                   weekly grading, plus the Vite UI source in research/hub
```

Both trees arrived via `git subtree`, full history intact.

## Stack

Python 3.12, pytest, XGBoost/numpy; Vite + vanilla JS on the frontend; Vercel for serving; GitHub Actions for CI and the daily projections cron. Data: nflverse, Sleeper, FantasyCalc. The budget is $0 and stays there — no paid APIs, no hosted database, no containers.

## Running

Tests:

```bash
cd apps/fantasyhub
pip install -r requirements.txt -r requirements-ml.txt -r requirements-dev.txt
python -m pytest api/ scripts/ -q

cd research
pip install -r requirements.txt
SLEEPER_LEAGUE_ID=test pytest -q
```

Local app: `bash research/hub/start.sh` runs the API on 127.0.0.1:8000, the read-only proxy on 8002, and the Vite UI on 8001. On macOS, `research/StartDraftly.command` does the same with one double-click.

## License

MIT — see LICENSE.
