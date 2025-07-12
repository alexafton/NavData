<img width="256" height="256" alt="app_icon-1" src="https://github.com/user-attachments/assets/4b75e6ca-9f07-450f-a349-e802d89914ea" />


# Navigraph Charts Clone

A free, open-source for flight simulation enthusiasts. This application provides access to aviation charts, airport information and Weather information without requiring expensive subscriptions.
[Currently in Beta]

## Features

- **Airport Search**: Search for airports by ICAO code (names would be in the next update)
- **Multiple Chart Types**: Access various chart types including:
  - VFR Sectional Charts
  - Terminal Area Charts
  - IFR Enroute Charts (Low/High)
  - Approach Plates
  - Airport Diagrams
- **Free Data Sources**: Utilizes free aviation data from:
  - FAA (Federal Aviation Administration)
  - ChartFox
  - OpenFlightMaps
  - PDF (Still not used trying to fix stuff)
- **Cross-Platform**: Built with Flutter for Windows, with future Android/iOS support
- **Offline Capability**: Download charts for offline use
- **Flight Planning**: Basic flight planning tools and navigation data

## Screenshots

*Screenshots will be added once the application is built and tested.*

## Installation
Click on release and you will be able to download the .exe (for android and IOS in the future it would be at the App store and Google play)
### Prerequisites

- Flutter SDK (3.22.1 or later)
- Dart SDK
- Windows 10/11 (for Windows builds)

## Usage

1. **Search for Airports**: Use the search box in the left panel to find airports by ICAO code (e.g., "KJFK") or name (e.g., "Kennedy")

2. **Select Chart Type**: Choose from various chart types in the chart types section

3. **View Charts**: Select an airport and chart type to view available charts

4. **Download Charts**: Use the download button to save charts for offline use

## Data Sources

This application uses free and open aviation data sources:

- **ChartFox**: Community-driven free aviation charts for flight simulation
- **OpenFlightMaps**: Open-source aeronautical data under public license
- **PDF**: Some charts i have them via PDF everything is up to date

## Legal Notice

This application is intended for flight simulation use only and should not be used for real-world navigation. Always use official, current charts for actual flight operations.

The application respects the terms of use of all data sources and only accesses publicly available, free aviation data.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open-source and available under the MIT License. See the LICENSE file for more details.

## Disclaimer

This software is provided "as is" without warranty of any kind. The developers are not responsible for any damages or issues that may arise from using this software. This application is for educational and flight simulation purposes ONLY.

## Support

If you find this application useful and would like to support its development, please consider:

- Starring the repository
- Reporting bugs and suggesting features
- Contributing code improvements
- Sharing with other flight simulation enthusiasts

## Roadmap

- [ X ] Implement actual chart display functionality(In progress)
- [ X ] Add chart caching and offline storage(In progress)
- [ X ] Integrate real-time weather data(In progress)
- [ X ] Implement chart annotations and measurements(In progress)
- [ X ] Add mobile support (Android/iOS)(In the future)
- [ X ] Integrate with flight simulators(In progress)
- [ X ] Add user preferences and settings(In progress)
- [ X ] Implement chart updates and notifications(In progress)

## Technical Details

- **Framework**: Flutter 3.22.1
- **Language**: Dart
- **Platforms**: Windows (primary), Android/iOS (planned)
- **Architecture**: Clean architecture with separation of concerns
- **Data Sources**: REST APIs and direct file downloads
- **Storage**: Local file system with SQLite for metadata

## Acknowledgments

- ChartFox community for free flight simulation charts
- OpenFlightMaps association for open aeronautical data
- Flutter team for the excellent cross-platform framework
