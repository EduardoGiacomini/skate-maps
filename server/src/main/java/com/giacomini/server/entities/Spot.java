package com.giacomini.server.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "SPOT")
public class Spot implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    private boolean hasFlatRail;
    private boolean hasBank;
    private boolean hasJumpRamp;

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isHasFlatRail() {
        return hasFlatRail;
    }

    public void setHasFlatRail(boolean hasFlatRail) {
        this.hasFlatRail = hasFlatRail;
    }

    public boolean isHasBank() {
        return hasBank;
    }

    public void setHasBank(boolean hasBank) {
        this.hasBank = hasBank;
    }

    public boolean isHasJumpRamp() {
        return hasJumpRamp;
    }

    public void setHasJumpRamp(boolean hasJumpRamp) {
        this.hasJumpRamp = hasJumpRamp;
    }
}
