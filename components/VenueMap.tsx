'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Map as LeafletMap, Marker } from 'leaflet';
import type { Venue } from '@/lib/data';
import styles from './VenueMap.module.css';

type Props = {
  venues: Venue[];
  hoveredSlug?: string | null;
};

export default function VenueMap({ venues, hoveredSlug }: Props) {
  const mapId = 'venue-leaflet-map';
  const markersRef = useRef<Map<string, Marker>>(new Map());
  const mapRef = useRef<LeafletMap | null>(null);

  // Initialise map once
  useEffect(() => {
    (async () => {
      const L = (await import('leaflet')).default;

      const container = document.getElementById(mapId);
      if (!container) return;
      if ((container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

      const venuesWithCoords = venues.filter((v) => v.lat != null && v.lng != null);

      const centerLat =
        venuesWithCoords.reduce((s, v) => s + v.lat!, 0) / (venuesWithCoords.length || 1);
      const centerLng =
        venuesWithCoords.reduce((s, v) => s + v.lng!, 0) / (venuesWithCoords.length || 1);

      const map = L.map(mapId, { zoomControl: true }).setView([centerLat, centerLng], 13);
      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      venuesWithCoords.forEach((v) => {
        const icon = L.divIcon({
          className: '',
          html: `<div class="${styles.markerBubble}">${Number(v.rating).toFixed(1)}</div>`,
          iconSize: [44, 30],
          iconAnchor: [22, 15],
        });

        const marker = L.marker([v.lat!, v.lng!], { icon }).addTo(map);
        marker.bindPopup(
          `<div style="font-family:sans-serif;font-size:13px;font-weight:600">${v.name}</div>
           <div style="font-size:12px;color:#666;margin-top:2px">★ ${Number(v.rating).toFixed(1)} · ${v.location}</div>`,
          { offset: [0, -8] }
        );
        markersRef.current.set(v.slug, marker);
      });
    })();

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update marker highlight when hoveredSlug changes
  useEffect(() => {
    (async () => {
      const L = (await import('leaflet')).default;

      markersRef.current.forEach((marker, slug) => {
        const isHovered = hoveredSlug === slug;
        const venue = venues.find((v) => v.slug === slug);
        if (!venue) return;
        const icon = L.divIcon({
          className: '',
          html: `<div class="${styles.markerBubble} ${isHovered ? styles.markerHovered : ''}">${Number(venue.rating).toFixed(1)}</div>`,
          iconSize: [44, 30],
          iconAnchor: [22, 15],
        });
        marker.setIcon(icon);
      });
    })();
  }, [hoveredSlug, venues]);

  return <div id={mapId} className={styles.map} />;
}
